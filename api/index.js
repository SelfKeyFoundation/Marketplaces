'use strict';

const express = require('express');
require('dotenv').config();

const fs = require('mz/fs');
const debug = require('debug')('app');
const ejs = require('express-ejs-layouts');
const errorhandler = require('errorhandler');
const path = require('path');

const app = express();
app.set('app-name',     process.env.SITE_NAME);
app.set('port',         process.env.PORT || 3000);
app.set('root',         __dirname);
app.set('app',          __dirname + "/app");
app.set('airtable_key', process.env.AIRTABLE_API_KEY);
app.set('site_url',     process.env.SITE_URL);
app.set('site_path',    process.env.SITE_PATH);

app.use(express.static('public'));
app.use(ejs);
app.locals.rmWhitespace = true;

// CORS headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/*
app.use(function(req, res, next) {
  const countries = require(app.get('app') + '/config/countries.js');
  app.locals.countriesConfig = countries;
  next();
});
*/

app.set('views', path.join(app.get('app'), 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/application');

app.locals.helpers = require(app.get('app') + '/lib/helpers.js')(app);
app.locals.h = app.locals.helpers;
app.locals.env = app.settings.env;
app.locals.site_path = app.settings.site_path;

require(app.get('app') + '/config/routes.js')(app);

app.use(errorhandler());
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
  debug('Express server ' + app.settings.env + ' listening on port ' + server.address().port);
});