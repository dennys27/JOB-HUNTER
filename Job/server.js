var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const path = require("path");
const cors = require("cors");
var jobs = require("./routes/jobs");
const connect = require("./Config/db");
require("dotenv").config();
var app = express();




app.use(cors());
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

connect();
app.use("/jobs", jobs);


app.listen(5001, () => {
  console.log("server is up and running... in port 5001");
});
