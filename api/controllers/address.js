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

  if(!req._user) {
    return next(CustomError({
      name: 'AUTHORIZATION_DENIAL',
      message: 'Your are not logged in'
    }));
  }

  // Begin workflow
  var workflow = new EventEmitter();

  // validating address data
  // cant trust anyone
  workflow.on('validate', function validateAddress() {
    req.assert('user', 'userId is invalid').notEmpty().isMongoId();
    req.assert('longitude', 'longitude cannot be empty').notEmpty();
    req.assert('latitude', 'latitude cannot be empty').notEmpty();

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

    body.virtual_code = olc.encode(body.latitude, body.longitude, 12);

    if(body.location_pic) {
      base64ImageToFile(body.location_pic, './media', function (err, imgPath) {
        if(err) {
          return next(CustomError({
            name: 'ADDRESS_CREATION_ERROR',
            message: err.message
          }));
        }

        body.location_pic = imgPath.slice(imgPath.indexOf('/'));

        Address.create(body, function (err, data) {
          if(err) {
            return next(CustomError({
              name: 'ADDRESS_CREATION_ERROR',
              message: err.message
            }));
          }
          var address = data.address;

          if(!data.isNew) {
            return res.status(201).json(address);

          } else {
            var update = { $push: { addresses: address._id } };

            User.update({ _id: address.user }, update, function (err) {
              if(err) {
                return next(CustomError({
                  name: 'ADDRESS_CREATION_ERROR',
                  message: err.message
                }));
              }

              res.status(201).json(address);

            });
          }

        });
      });

    } else {
      Address.create(body, function (err, data) {
        if(err) {
          return next(CustomError({
            name: 'ADDRESS_CREATION_ERROR',
            message: err.message
          }));
        }
        var address = data.address;

        if(!data.isNew) {
          return res.status(201).json(address);

        } else {
          var update = { $push: { addresses: address._id } };

          User.update({ _id: address.user }, update, function (err) {
            if(err) {
              return next(CustomError({
                name: 'ADDRESS_CREATION_ERROR',
                message: err.message
              }));
            }

            res.status(201).json(address);

          });
        }

      });
    }


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
