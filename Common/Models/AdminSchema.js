const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { User } = require("./UserSchema");
require("dotenv").config();


const adminSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  verificationRequests: [{
    userId: {
      type: String,
      ref: User,
    }
  }]
});

adminSchema.methods.generateAuthToken = (payload) => {
  const token = jwt.sign(payload, process.env.ADMINJWTPRIVATEKEY, {
    expiresIn: "7d",
  });
};

const Admin = mongoose.model("admin", adminSchema);

module.exports = { Admin };
