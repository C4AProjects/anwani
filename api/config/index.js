/**
 * Load Module dependencies.
 */

var env = process.env;

module.exports = {

  ENV: env.NODE_ENV || 'development',

  HTTP_PORT: env.PORT || 8000,

  // MongoDB URL
  MONGODB_URL: env.MONGOBD_URL || 'mongodb://127.0.0.1:27017/anwani',

  SALT_FACTOR: 12,

  TOKEN: {
    RANDOM_BYTE_LENGTH: 24
  },

  JWT_SECRET: 'ylHUMaVrS0dpcO/+nT+6aAVVGcRJzuSocoLJDoJgBlaAYTdq',

  OPEN_ENDPOINTS: [
    /\/media\/.*/,
    /\/documentation\/.*/,
    '/users/login',
    '/users/signup',
    '/',
    '/info'
  ]
};
