const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();


const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = (payload)=>{
    const token = jwt.sign(payload,process.env.JWTPRIVATEKEY,{ expiresIn: "7d" })
}



module.exports = { User, validate };