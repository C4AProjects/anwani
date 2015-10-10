/** * Load Module Dependencies
 */
var http  = require('http');
var path = require('path');

var express    = require('express');
var debug      = require('debug')('anwani-api:server');
var mongoose   = require('mongoose');
var validator  = require('express-validator');
var bodyParser = require('body-parser');
var cors       = require('cors');

var config = require('./config');
var utils  = require('./lib');
var authorize = require('./lib/authorize');
var multipart = require('./lib/multipart');
var storeMediaFiles = require('./lib/store-media');
var routes = require('./routes');

var app = express();
var port = config.HTTP_PORT;
var server;

// connect to mongoDB
mongoose.connect(config.MONGODB_URL);
mongoose.connection.on('error', utils.mongoError);

// Service Settings
app.disable('x-powered-by');
app.set('port', config.HTTP_PORT);

// PRODUCTION Environment settings
if(config.NODE_ENV === 'production'){
  app.enable('trust proxy', 1);
}

//--Setup Middleware--//

// Documentation resource

app.use('/documentation', express.static(path.join(__dirname, 'documentation')));
app.use('/media', express.static(path.join(__dirname, 'media')));

app.use(authorize().unless( { path: config.OPEN_ENDPOINTS } ));
app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization'
}));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(multipart({
  limits: {
    files: 1,
    fileSize: config.MEDIA.FILE_SIZE
  },
  immediate: true
}));
app.use(storeMediaFiles());
app.use(validator());

// Init routes
routes(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (config.ENV === 'development') {
  app.use(function(err, req, res, next) {
    var status = err.status || 500;

    res.status(status).json({
      error: {
        status: status,
        type: err.name,
        stack: err.stack,
        message: err.message
      }
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  var status = err.status || 500;

  res.status(status).json({
    error: {
      status: status,
      type: err.name,
      message: err.message
    }
  });
});


/**
 * Create HTTP server.
 */

server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', utils.onError(port));
server.on('listening', utils.onListening(server));

module.exports = app;
