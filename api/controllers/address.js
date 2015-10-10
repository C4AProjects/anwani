/** *
 * Load Module Dependencies.
 */
var EventEmitter = require('events').EventEmitter;
var crypto = require('crypto');

var debug = require('debug')('anwani-api:address-controller');
var async = require('async');
var moment = require('moment');
var _     = require('lodash');

var Address      = require('../dal/address');
var AddressModel = require('../models/address');
var config       = require('../config');
var CustomError  = require('../lib/custom-error');
var User         = require('../dal/user');
var UserModel    = require('../models/user');
var olc          = require('../lib/olc');

function createVirtualCode(cb) {
  crypto.randomBytes(config.VIRTUAL_CODE_LENGTH, function (err, buf) {
    if(err) {
      err.message = 'Problem creating virtual code';
      return cb(err);
    }

    buf = buf.toString('hex').toUpperCase();

    var query = { virtual_code: buf };

    Address.get(query, function (err, address) {
      if(err) {
        return cb(err);
      }

      if(address._id) {
        createVirtualCode(cb);
      } else {
        cb(null, buf);
      }
    });
  });
}

/**
 * Create a new address
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.create = function createAddress(req, res, next) {
  debug('create address');

  if(!req._user) {
    return next(CustomError({
      name: 'AUTHORIZATION_ERROR',
      message: 'Your are not logged in'
    }));
  }

  // Begin workflow
  var workflow = new EventEmitter();
  var body  = req.body;

  // validating address data
  // cant trust anyone
  workflow.on('validate', function validateAddress() {
    var errs = req.validationErrors();

    if(errs) {
      return next(CustomError({
        name: 'ADDRESS_CREATION_ERROR',
        message: errs.message
      }));
    }

    workflow.emit('createVirtualCode');
  });

  workflow.on('createVirtualCode', function () {
    createVirtualCode(function (err, code) {
      if(err) {
        return done(CustomError({
          name: 'ADDRESS_CREATION_ERROR',
          message: err.message,
          status: 500
        }));
      }


      body.virtual_code = code;

      workflow.emit('createAddress');
    });
  });

  workflow.on('createAddress', function createAddress() {

    async.waterfall([
      function retrieveUser(done) {
        User.get({ _id: body.user }, function (err, user) {
          if(err) {
            return done(CustomError({
              name: 'ADDRESS_CREATION_ERROR',
              message: err.message,
              status: 500
            }));
          }

          if(!user._id) {
            return done(CustomError({
              name: 'ADDRESS_CREATION_ERROR',
              message: 'user - ' + body.user + ' does not exist'
            }));
          }

          return done(null, user);

        });
      },
      function maxAddressesReached(user, done) {
        if(user.addresses.length < config.MAX_ADDRESSES) {
          return done(null, user);

        } else {
          return done(CustomError({
            name: 'ADDRESS_CREATION_ERROR',
            message: 'Max Number of addresses reached'
          }));
        }
      },
      function createAddress(user, done) {
        Address.create(body, done);
      },
      function updateAddress(data, done) {
        var address = data.address;

        if(!data.isNew) {
          if(address.archived) {
            var query = {
              _id: address._id
            };
            var updates = {
              archived: false
            };

            Address.update(query, updates, function (err, addr) {
              if(err) {
                return done(err);
              }

              return done(null, addr, data.isNew);

            });
          } else {
            return done(null, address, data.isNew);

          }
        } else {
          return done(null, address, data.isNew);

        }
      },
      function updateUser(address, isNew, done) {
        if(isNew) {
          var update = { $push: { addresses: address._id } };

          User.update({ _id: address.user }, update, function (err) {
            if(err) {
              return done(err);
            }

            return done(null, _.omit(address , 'archived' ));

          });
        } else {
          UserModel.findById(address.user, function (err, user) {
            if(err) {
              return done(err);
            }

            var isPresent = user.addresses.some(function(addr) {
              return address._id.toString() === addr.toString();
            });

            console.log(isPresent);
            if(isPresent) {
              return done(null, _.omit(address , 'archived' ));
            } else {
              var update = { $push: { addresses: address._id } };

              User.update({ _id: address.user }, update, function (err) {
                if(err) {
                  return done(err);
                }

                return done(null, _.omit(address , 'archived' ));

              });
            }
          });
        }
      }
    ], function (err, address) {
      if(err) {
        return next(err);
      }

      res.status(201).json(address);
    });

  });

  workflow.emit('validate');
};


/**
 * Get a single address.
 *
 * @desc Fetch a address with the given id from the database.
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchOne = function fetchOneAddress(req, res, next) {
  debug('fetch address:' + req.params.id);

  if(!req._user) {
    return next(CustomError({
      name: 'AUTHORIZATION_ERROR',
      message: 'Your are not logged in'
    }));
  }

  var query = {
    _id: req.params.id,
    archived: false
  };

  Address.get(query, function cb(err, address) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(address);
  });
};

/**
 * Update a single address.
 *
 * @desc Fetch a address with the given id from the database
 *       and update their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.update = function updateAddress(req, res, next) {
  debug('updating address:'+ req.params.id);

  if(!req._user) {
    return next(CustomError({
      name: 'AUTHORIZATION_ERROR',
      message: 'Your are not logged in'
    }));
  }

  var query = {
    _id: req.params.id
  };
  var body = req.body;
  var update;

  update = {
    $set: body
  };

  Address.update(query, update, function cb(err, address) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(address || {});

  });

};

/**
 * Delete a single address.
 *
 * @desc Fetch a address with the given id from the database
 *       and delete their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.delete = function deleteAddress(req, res, next) {
  debug('deleting address:' + req.params.id);

  if(!req._user) {
    return next(CustomError({
      name: 'AUTHORIZATION_ERROR',
      message: 'Your are not logged in'
    }));
  }

  var query = {
    _id: req.params.id
  };

  Address.delete(query, function cb(err, address) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(address || {});
  });
};

/**
 * Get a collection of addresss
 *
 * @desc Fetch a collection of addresss
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchAll = function fetchAllAddresss(req, res, next) {
  debug('get a collection of addresss');

  if(!req._user || (req._user.role !== 'admin')) {
    return next(CustomError({
      name: 'AUTHORIZATION_ERROR',
      message: 'Your are not logged in or you are not an administrator'
    }));
  }

  var query = {};
  var qs = {
    populate: true
  };

  Address.getCollection(query, qs, function cb(err, addresss) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(addresss);
  });
};



/**
 *  Archive an address.
 */
exports.archive = function archiveAddress(req, res, next) {
  debug('archive address: ' + req.params.id);

  if(!req._user) {
    return next(CustomError({
      name: 'AUTHORIZATION_ERROR',
      message: 'Your are not logged in'
    }));
  }

  var query = {
    _id: req.params.id
  };
  var update;

  update = {
    $set: { archived: true }
  };

  Address.update(query, update, function cb(err, address) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }


    if(!address._id) {
      return next(CustomError({
        name: 'QUERY_ERROR',
        message: 'Address(' + req.params.id + ') could not be found'
      }));
    }

    var findQuery = {
      _id: req._user._id
    };
    var updates = {
      $pull: { addresses: address._id }
    };

    User.update(findQuery, updates, function (err, user ) {
      if(err) {
        return next(CustomError({
          name: 'SERVER_ERROR',
          message: err.message,
          status: 500
        }));
      }

      res.json(address);
    });


  });

};
