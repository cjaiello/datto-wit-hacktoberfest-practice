const express = require('express')
const ipfilter = require('express-ipfilter').IpFilter

var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

//const ips = ['47.19.105.246']

var app = express();
//app.use(ipfilter(ips, { mode: 'allow' }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);

app.use('/', function(req, res, next) {
  const ips = ['8.41.72.157','8.33.72.250','8.41.72.250','47.19.105.250','8.12.58.0']
  var host = req.headers['host'];
  console.log(`Host is ${host}`);
  var forwardedIpsStr = req.header('x-forwarded-for'); 
  console.log(`forwardedIpsStr is ${forwardedIpsStr}`);
  if (!ips.includes(forwardedIpsStr)) {
    console.log(`does not include`);
    res.render('error');
  }
});

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
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
