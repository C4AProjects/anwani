/**
 *
 * Load Module Dependencies.
 */
var EventEmitter = require('events').EventEmitter;

var debug = require('debug')('anwani-api:token-controller');
var async = require('async');
var moment = require('moment');

var Token     = require('../dal/token');
var TokenModel = require('../models/token');
var config    = require('../config');
var CustomError = require('../lib/custom-error');

/**
 * Create a token.
 *
 * @desc create a token and add them to the database
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.create = function createToken(req, res, next) {
  debug('create token');

  if(!req._user || (req._user.realm !== 'admin')) {
    return next(CustomError({
      name: 'AUTHORIZATION_ERROR',
      message: 'Access Denied, only admins allowed'
    }));
  }

  // Begin workflow
  var workflow = new EventEmitter();

  // validating token data
  // cant trust anyone
  workflow.on('validate', function validateToken() {

    var errs = req.validationErrors();

    if(errs) {
      return next(CustomError({
        name: 'ADDRESS_CREATION_ERROR',
        message: errs.message
      }));
    }

    workflow.emit('createToken');
  });

  workflow.on('createToken', function createToken() {
    var body = req.body;

    Token.create(body, function (err, token) {
      if(err) {
        return next(customeerror({
          name: 'user_creation_error',
          message: err.message
        }));
      }

      res.status(201).json(token);
    });

  });

  workflow.emit('validate');
};

/**
 * Get a single token.
 *
 * @desc Fetch a token with the given id from the database.
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchOne = function fetchOneToken(req, res, next) {
  debug('fetch token:' + req.params.id);

  if(!req._user || (req._user.realm !== 'admin')) {
    return next(CustomError({
      name: 'AUTHORIZATION_ERROR',
      message: 'Access Denied, only admins allowed'
    }));
  }

  var query = {
    _id: req.params.id
  };

  Token.get(query, function cb(err, token) {
    if(err) {
      return next(err);
    }

    res.json(token);
  });
};

/**
 * Update a single token.
 *
 * @desc Fetch a token with the given id from the database
 *       and update their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.update = function updateToken(req, res, next) {
  debug('updating token:'+ req.params.id);

  if(!req._user || (req._user.realm !== 'admin')) {
    return next(CustomError({
      name: 'AUTHORIZATION_ERROR',
      message: 'Access Denied, only admins allowed'
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

  Token.update(query, update, function cb(err, token) {
    if(err) {
      return next(err);
    }

    res.json(token || {});

  });

};

/**
 * Delete a single token.
 *
 * @desc Fetch a token with the given id from the database
 *       and delete their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.delete = function deleteToken(req, res, next) {
  debug('deleting token:' + req.params.id);

  if(!req._user || (req._user.realm !== 'admin')) {
    return next(CustomError({
      name: 'AUTHORIZATION_ERROR',
      message: 'Access Denied, only admins allowed'
    }));
  }

  var query = {
    _id: req.params.id
  };

  Token.delete(query, function cb(err, token) {
    if(err) {
      return next(err);
    }

    res.json(token || {});
  });
};

/**
 * Get a collection of tokens
 *
 * @desc Fetch a collection of tokens
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchAll = function fetchAllTokens(req, res, next) {
  debug('get a collection of tokens');

  if(!req._user || (req._user.realm !== 'admin')) {
    return next(CustomError({
      name: 'AUTHORIZATION_ERROR',
      message: 'Access Denied, only admins allowed'
    }));
  }

  var query = {};
  var qs = {};

  Token.getCollection(query, qs, function cb(err, tokens) {
    if(err) {
      return next(err);
    }

    res.json(tokens);
  });
};
