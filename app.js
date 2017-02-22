const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const handlebars = require('express3-handlebars')

const index = require('./routes/index');

const app = express();

app.engine('handlebars', handlebars({
  extname: 'handlebars',
  defaultLayout: 'layout',
  layoutsDir:__dirname + '/views'
}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'handlebars')

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
