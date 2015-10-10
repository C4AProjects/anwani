/**
 * Load Module Dependencies
 */
var debug  = require('debug')('anwani-api:authorization');
var _      = require('lodash');
var unless = require('express-unless');

var config = require('../config');

var Token = require('../dal/token');

module.exports = function authorizeAccess(opts) {
  debug('init middleware');

  var options = {};

  opts = opts || {};

  _.extend(options, opts);

  function middleware (req, res, next) {
    debug('handling request for ' + req.url);

    var accessToken;

    if (req.headers && req.headers.authorization) {
      var parts = req.headers.authorization.split(' ');
      if (parts.length == 2) {
        var scheme = parts[0];
        var credentials = parts[1];

        if (/^Bearer$/i.test(scheme)) {
          accessToken = credentials;
        } else {
          return next(new Error('credentials_bad_scheme: Format is Authorization: Bearer [token]'));
        }
      } else {
        return next(new Error('credentials_bad_format: Format is Authorization: Bearer [token]' ));
      }

    } else if (req.query && req.query['access-token']) {
      accessToken = req.query['access-token'];

    }

    if (!accessToken) {
      return next(new Error('credentials_required: No authorization token was found'));
    }

    Token.get({ value: accessToken }, function (err, token) {
      if(err) {
        return next(err);
      }

      if(!token) {
        return next(new Error('bad_credentials: Access Token provided is unverified '));
      }

      req._user = token.user || token.subscriber || null;

      next();
    });

  }

  middleware.unless = unless;


  return middleware;
};
