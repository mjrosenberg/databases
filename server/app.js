var express = require('express');
var db = require('./db');
var path = require('path');
// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);
//maybe change from 3000 to 8080

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use('/classes', router);

// Serve the client files
//app.use(express.static(__dirname + '/../bigClient/ghrphx10-chatterbox-client'));
app.use(express.static(path.join(__dirname, '/../bigClient/ghrphx10-chatterbox-client')));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

