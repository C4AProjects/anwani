/**
 *
 * Load Module Dependencies.
 */
var EventEmitter = require('events').EventEmitter;

var debug  = require('debug')('anwani-api:user-controller');
var async  = require('async');
var moment = require('moment');
var _     = require('lodash');

var Address   = require('../dal/address');
var User      = require('../dal/user');
var UserModel = require('../models/user');
var config    = require('../config');
var CustomError = require('../lib/custom-error');

/**
 * Create a user.
 *
 * @desc create a user and add them to the database
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.create = function createUser(req, res, next) {
  debug('create user');

  // Begin workflow
  var workflow = new EventEmitter();

  // validating user data
  // cant trust anyone
  workflow.on('validate', function validateUser() {

    var errs = req.validationErrors();

    if(errs) {
      return next(CustomError({
        name: 'ADDRESS_CREATION_ERROR',
        message: errs.message
      }));
    }

    workflow.emit('createUser');
  });

  workflow.on('createUser', function createUser() {
    var body = req.body;

    User.create(body, function (err, user) {
      if(err) {
        return next(customeerror({
          name: 'user_creation_error',
          message: err.message
        }));
      }

      res.status(201).json(user);


    });


  });

  workflow.emit('validate');
};

/**
 * Get a single user.
 *
 * @desc Fetch a user with the given id from the database.
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchOne = function fetchOneUser(req, res, next) {
  debug('fetch user:' + req.params.id);

  if(!req._user) {
    return next(CustomError({
      name: 'AUTHORIZATION_ERROR',
      message: 'Your are not logged in'
    }));
  }

  var query = {
    _id: req.params.id
  };

  User.get(query, function cb(err, user) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(user);
  });
};

/**
 * Update a single user.
 *
 * @desc Fetch a user with the given id from the database
 *       and update their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.update = function updateUser(req, res, next) {
  debug('updating user:'+ req.params.id);

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

  if(body.password) {
    User.hashPasswd(body.password, function (err, hash) {

      body.password = hash;

      update = {
        $set: body
      };

      User.update(query, update, function cb(err, user) {
        if(err) {
          return next(CustomError({
            name: 'SERVER_ERROR',
            message: err.message,
            status: 500
          }));
        }

        res.json(user || {});

      });
    });
  } else {

    update = {
      $set: body
    };

    User.update(query, update, function cb(err, user) {
      if(err) {
        return next(CustomError({
          name: 'SERVER_ERROR',
          message: err.message,
          status: 500
        }));
      }

      res.json(user || {});

    });
  }

};

/**
 * Delete a single user.
 *
 * @desc Fetch a user with the given id from the database
 *       and delete their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.delete = function deleteUser(req, res, next) {
  debug('deleting user:' + req.params.id);

  if(!req._user) {
    return next(CustomError({
      name: 'AUTHORIZATION_ERROR',
      message: 'Your are not logged in'
    }));
  }

  var query = {
    _id: req.params.id
  };

  User.delete(query, function cb(err, user) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(user || {});
  });
};

/**
 * Get a collection of users
 *
 * @desc Fetch a collection of users
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchAll = function fetchAllUsers(req, res, next) {
  debug('get a collection of users');

  if(!req._user || (req._user.realm !== 'admin')) {
    return next(CustomError({
      name: 'AUTHORIZATION_ERROR',
      message: 'Access Denied, only admins allowed'
    }));
  }

  var query = {};
  var qs = {
    populate: true
  };

  User.getCollection(query, qs, function cb(err, users) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(users);
  });
};

/**
 * Get a collection of user's addresses
 *
 * @desc Fetch a collection of user's addresses
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchUserAddresses = function fetchAllUserAddresses(req, res, next) {
  debug('get a collection of user addresses');

  if(!req._user) {
    return next(CustomError({
      name: 'AUTHORIZATION_ERROR',
      message: 'Your are not logged in'
    }));
  }

  var query = {
    user: req.params.id
  };
  var qs = {
    populate: false
  };

  Address.getCollection(query, qs, function cb(err, addresses) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(addresses);
  });
};

/**
 * Delete user Address
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.removeUserAddress = function removeUserAddress(req, res, next) {
  debug('deleting user address:' + req.params.addrId);

  if(!req._user) {
    return next(CustomError({
      name: 'AUTHORIZATION_ERROR',
      message: 'Your are not logged in'
    }));
  }

  if(!req.params.id && !req.params.addrId) {
    return next(CustomError({
      name: 'MISSING_INFO_ERROR',
      message: 'Please provide both UserId and AddressId'
    }));
  }

  var query = {
    user: req.params.id,
    _id: req.params.addrId
  };

  Address.delete(query, function cb(err, user) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(user || {});
  });
};
