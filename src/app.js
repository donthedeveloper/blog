'use strict'

var express = require('express');
var app = express();
var morgan = require('morgan');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');

// template stuff
app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', { noCache: true });

// logging
app.use(morgan('dev'));

// body parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// server stuff
var server = app.listen(3000, function() {
  console.log('listening on port 3000');
});

app.use(express.static('public'));

// app.use('/')