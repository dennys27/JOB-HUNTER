const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();


const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  verification: { type: Boolean },
  otp: { type: Number },
});

userSchema.methods.generateAuthToken = (payload)=>{
    const token = jwt.sign(payload,process.env.JWTPRIVATEKEY,{ expiresIn: "7d" })
}


const User = mongoose.model("user", userSchema);



module.exports = { User };