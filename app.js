const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const apiRouter = require('./routes/weather');
const favicon = require('serve-favicon');
const app = express();
require('dotenv').load();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(favicon( 'favicon.ico'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/ratio-weather')));
app.use('/', express.static(path.join(__dirname, 'dist/ratio-weather')));
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.sendStatus(status);
});

module.exports = app;
