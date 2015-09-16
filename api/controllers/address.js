/**
 *
 * Load Module Dependencies.
 */
var EventEmitter = require('events').EventEmitter;

var debug = require('debug')('anwani-api:address-controller');
var async = require('async');
var moment = require('moment');
var base64ImageToFile = require('base64image-to-file');

var Address      = require('../dal/address');
var AddressModel = require('../models/address');
var config       = require('../config');
var CustomError  = require('../lib/custom-error');
var User         = require('../dal/user');
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
    var addressInfo = body.address;
    var userInfo = body.user;
    console.log(body);

    async.waterfall([
      function createOrRetrieveUser(done) {
        User.get({ phone_number: userInfo.phone_number }, function (err, user) {
          if(err) {
            return done(CustomError({
              name: 'ADDRESS_CREATION_ERROR',
              message: err.message,
              status: 500
            }));
          }

          if(user && user.phone_number) {
            return done(null, user);
          }

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
        });
      },
      function maxAddressesReached(user, done) {
        if(user.addresses.length > config.MAX_ADDRESSES_NUMBER) {
          return done(CustomError({
            name: 'ADDRESS_CREATION_ERROR',
            message: 'Max Number of addresses reached'
          }));
        } else {
          return done(null, user);
        }
      },
      function createLocationPic(user, done) {
        addressInfo.user = user._id;

        if(!addressInfo.location_pic) {
          return done(null);
        } else {
          base64ImageToFile(addressInfo.location_pic, './media', function (err, imgPath) {
            if(err) {
              return done(CustomError({
                name: 'ADDRESS_CREATION_ERROR',
                message: err.message,
                status: 500
              }));
            }

            addressInfo.location_pic = imgPath.slice(imgPath.indexOf('/'));

            return done(null);
          });

        }
      },
      function createAddress(done) {

        Address.create(addressInfo, function (err, data) {
          if(err) {
            return done(CustomError({
              name: 'ADDRESS_CREATION_ERROR',
              message: err.message,
              status: 500
            }));
          }

          var address = data.address;
          console.log(data);

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
      console.log(address);

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
    _id: req.params.id
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

  if(!req._user) {
    return next(CustomError({
      name: 'AUTHORIZATION_ERROR',
      message: 'Your are not logged in'
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
        if(user.addresses.length > config.MAX_ADDRESSES_NUMBER) {
          return done(CustomError({
            name: 'ADDRESS_CREATION_ERROR',
            message: 'Max Number of addresses reached'
          }));
        } else {
          return done(null, user);
        }
      },
      function createLocationPic(user, done) {

        if(!body.location_pic) {
          return done(null);
        } else {
          base64ImageToFile(body.location_pic, './media', function (err, imgPath) {
            if(err) {
              return done(CustomError({
                name: 'ADDRESS_CREATION_ERROR',
                message: err.message,
                status: 500
              }));
            }

            body.location_pic = imgPath.slice(imgPath.indexOf('/'));

            return done(null);
          });

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
