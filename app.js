var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var apiRouter = require('./routes/weather');

var app = express();

// app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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
