const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { User } = require("./UserSchema");
require("dotenv").config();

const verifySchema = mongoose.Schema({
  user: {
        type: String,
        ref: User,
      },
});


const Verification = mongoose.model("verification", verifySchema);

module.exports = { Verification };
