const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();


const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  verification: { type: Boolean },
  otp: { type: Number },
  headline: { type: String },
  currentposition: { type: String },
  industry: { type: String },
  experience: { type: Array },
  location: { type: String },
  availability: { type: String },
  certifications: { type: Array },
  education: { type: Array },
  skills: { type: Array },
  age: { type: String },
  yearsofexperience: { type: String },
  location: { type: String },
  availability: { type: String },
  about: { type: String },
  profile: { type: Array },
  resume: { type: String },
});

userSchema.methods.generateAuthToken = (payload)=>{
    const token = jwt.sign(payload,process.env.JWTPRIVATEKEY,{ expiresIn: "7d" })
}


const User = mongoose.model("user", userSchema,);



module.exports = { User };