var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const path = require("path");
const cors = require("cors")
var admin = require("./routes/admin");
var users = require("./routes/users");
const connect = require("./Config/db");
require("dotenv").config();
var app = express();

var socketapi = require("./routes/socket")








app.use(cors()); 
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(logger("dev")); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

connect()
app.use("/user", users);
app.use("/admin", admin);





// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  //res.status(err.status || 500).send({ message: "something went wrong.." });
  
});

module.exports = { app ,socketapi};
