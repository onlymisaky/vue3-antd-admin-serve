var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var articleRouter = require('./routes/article');
const resp = require('./resp');
const { tableResp } = require('./resp');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/article', articleRouter);

app.get('/articles', (req, res, next) => {
  res.json(tableResp(req.query.page, req.query.size, {
    id: Date.now(),
    title: '文章标题',
    content: '文章内容',
    created: Date.now(),
    updated: Date.now(),
    author: 'onlymisaky',
    status: ['string', 'string', 1]
  }));
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
