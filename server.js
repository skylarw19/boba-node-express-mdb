const createError = require("http-errors");
const express = require("express");
const favicon = require("serve-favicon")
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");

require('dotenv').config();

const indexRouter = require("./routes/index");
const storesRouter = require("./routes/stores");
const usersRouter = require("./routes/users");
const visitedStoresRouter = require("./routes/visitedStores")
const drinksRouter = require("./routes/drinks")

require("./config/database");
require("./config/passport");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(methodOverride("_method"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(session({
  secret:'BobaRocks!',
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/stores", storesRouter);
app.use('/users', usersRouter);
app.use("/", visitedStoresRouter);
app.use("/", drinksRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
