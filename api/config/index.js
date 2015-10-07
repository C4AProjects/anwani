/**
 * Load Module dependencies.
 */
var path = require('path');

var env = process.env;
var API_URL = 'http://anwani-devapi.c4asolution.com/';

module.exports = {

  API_URL: API_URL,

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
    '/addresses/create',
    '/users/login',
    '/users/signup',
    '/',
  ],
  MEDIA: {
    FILE_SIZE: 2 * 1024 * 1024, // 2MB,
    URL: API_URL + 'media/',
    FILES_FOLDER: path.resolve(process.cwd(), './media') + '/'
  },

  MAX_ADDRESSES: 5
};
