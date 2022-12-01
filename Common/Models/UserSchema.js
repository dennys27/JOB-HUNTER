const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();


const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  verification: { type: String },
  otp: { type: Number },
  headline: { type: String },
  currentposition: { type: String },
  industry: { type: String },
  experience: { type: Array },
  location: { type: String },
  availability: { type: String },
  certifications: { type: Array },
  education: { type: Array },
  requests: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  network: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  notifications: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      content: String,
      postId: String,
      timeStamp: Date,
    },
  ],
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