/** * Load Module dependencies.  */ var path = require('path');

var env = process.env;
var API_URL = 'http://anwani-devapi.c4asolution.com/';

module.exports = {

  API_URL: env.API_URL || API_URL,

  ENV: env.NODE_ENV || 'development',

  HTTP_PORT: env.PORT || 5050,

  // MongoDB URL
  MONGODB_URL: env.MONGODB_URL || 'mongodb://127.0.0.1:27017/anwani',

  SALT_FACTOR: 12,

  TOKEN: {
    RANDOM_BYTE_LENGTH: 32
  },

  VIRTUAL_CODE_LENGTH: 4,

  SECURITY_ANSWER_SALT: 'ylHUMaVrS0dpcO/+nT+6aAVVGcRJzuSocoLJDoJgBlaAYTdq',

  OPEN_ENDPOINTS: [
    /\/media\/.*/,
    /\/documentation\/.*/,
    /\/subscribers\/verify\/.*/,
    '/users/login',
    '/users/signup',
    '/subscribers/login',
    '/subscribers/signup',
    '/users/password/update',
    '/',
  ],
  MEDIA: {
    FILE_SIZE: 2 * 1024, // 1MB,
    URL: API_URL + 'media/',
    FILES_FOLDER: path.resolve(process.cwd(), './media') + '/'
  },

  MAX_ADDRESSES: 5,

  VERIFICATION: {
    ON: true,
    TOKEN_LENGTH: 24
  },

  SMTP: {
    SERVICE: 'Gmail',
    USER: 'tonimut7@gmail.com',
    PASS: 'centantsonnigh'
  }
};
