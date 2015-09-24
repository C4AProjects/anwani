/** *
 * Load Module Dependencies.
 */
var EventEmitter = require('events').EventEmitter;

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

/**
 * Create a address.
 *
 * @desc create a address and add them to the database
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.create = function createAddress(req, res, next) {
  debug('create address');


  // Begin workflow
  var workflow = new EventEmitter();

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

    workflow.emit('createAddress');
  });

  workflow.on('createAddress', function createAddress() {
    var body = req.body;
    var userInfo = {
      first_name   : body.first_name || '',
      last_name    : body.last_name || '',
      other_name   : body.other_name || '',
      password     : body.password || '',
      phone_number : body.phone_number || ''
    };
    var addressInfo = {
      location_pic       : body.location_pic,
      short_virtual_code : body.short_virtual_code,
      long_virtual_code  : body.long_virtual_code,
      latitude           : body.latitude,
      longitude          : body.longitude,
      street_address     : body.street_address,
      city               : body.city,
      country            : body.country
    };

    async.waterfall([
      function createOrRetrieveUser(done) {
        if(!userInfo.phone_number) {
          return done(CustomError({
            name: 'ADDRESS_CREATION_ERROR',
            message: 'Please provide a phone_number for your account'
          }));
        }

        UserModel.findOne({ phone_number: body.phone_number }, function (err, user) {
          if(err) {
            return done(CustomError({
              name: 'ADDRESS_CREATION_ERROR',
              message: err.message,
              status: 500
            }));
          }

          if(user && user.phone_number && !user.archived) {
            return done(null, user);
          }


          if(!userInfo.password) {
            return done(CustomError({
              name: 'ADDRESS_CREATION_ERROR',
              message: 'Please provide a pin for your account'
            }));
          }

          if(user && user.archived) {
            UserModel.hashPasswd(userInfo.password, function (err, hash) {
              if(err) {
                return done(CustomError({
                  name: 'ADDRESS_CREATION_ERROR',
                  message: err.message,
                  status: 500
                }));
              }


              var update = {
                $set: { password: hash, archived: false }
              };
              var query = {
                _id: user._id
              };

              User.update(query, update, function cb(err, user) {
                if(err) {
                  return next(CustomError({
                    name: 'SERVER_ERROR',
                    message: err.message,
                    status: 500
                  }));
                }

                return done(null, user);

              });

            });

           } else {
             User.create(userInfo, function(err, doc) {
               if(err) {
                 return done(CustomError({
                   name: 'ADDRESS_CREATION_ERROR',
                   message: err.message,
                   status: 500
                 }));
               }

               return done(null, doc);
             });

           }

        });
      },
      function maxAddressesReached(user, done) {
        if(user.addresses.length > config.MAX_ADDRESSES) {
          return done(CustomError({
            name: 'ADDRESS_CREATION_ERROR',
            message: 'Max Number of addresses reached'
          }));
        } else {
          return done(null, user);
        }
      },
      function createAddress(user, done) {
        addressInfo.user = user._id;

        Address.create(addressInfo, function (err, data) {
          if(err) {
            return done(CustomError({
              name: 'ADDRESS_CREATION_ERROR',
              message: err.message,
              status: 500
            }));
          }

          var address = data.address;

          if(!data.isNew) {
            return done(null, address);

          } else {
            var update = { $push: { addresses: address._id } };

            User.update({ _id: address.user }, update, function (err) {
              if(err) {
                return done(CustomError({
                  name: 'ADDRESS_CREATION_ERROR',
                  message: err.message,
                  status: 500
                }));
              }

              return done(null, address);

            });
          }

        });
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

  if(!req._user || (req._user.realm !== 'admin')) {
    return next(CustomError({
      name: 'AUTHORIZATION_ERROR',
      message: 'Your are not logged in or you are not an administrator'
    }));
  }

  var query = {};
  var qs = {};

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
 * Create a new address
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.createNew = function createAddress(req, res, next) {
  debug('create address');

  if(!req._user) {
    return next(CustomError({
      name: 'AUTHORIZATION_ERROR',
      message: 'Your are not logged in'
    }));
  }

  // Begin workflow
  var workflow = new EventEmitter();

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

    workflow.emit('createAddress');
  });

  workflow.on('createAddress', function createAddress() {
    var body = req.body;

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

          return done(null, user);

        });
      },
      function maxAddressesReached(user, done) {
        if(user.addresses.length > config.MAX_ADDRESSES) {
          return done(CustomError({
            name: 'ADDRESS_CREATION_ERROR',
            message: 'Max Number of addresses reached'
          }));
        } else {
          return done(null, user);
        }
      },
      function createAddress(done) {

        Address.create(body, function (err, data) {
          if(err) {
            return done(CustomError({
              name: 'ADDRESS_CREATION_ERROR',
              message: err.message,
              status: 500
            }));
          }

          var address = data.address;

          if(!data.isNew) {
            return done(null, address);

          } else {
            var update = { $push: { addresses: address._id } };

            User.update({ _id: address.user }, update, function (err) {
              if(err) {
                return done(CustomError({
                  name: 'ADDRESS_CREATION_ERROR',
                  message: err.message,
                  status: 500
                }));
              }

              return done(null, address);

            });
          }

        });
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
