'use strict';

var express = require('express');
var mongo = require('mongodb');
var routes = require('./app/routes/index.js');

var app = express();

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

routes(app);

app.listen(process.argv[2] || 8080, function () {
   console.log('Node.js listening on port ' + process.argv[2]);
});