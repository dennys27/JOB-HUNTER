const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
const multer = require("multer");

const getJobs = asyncHandler(async (req, res) => {
    console.log("yeah im here...");
    res.json({message:"you re hitting the right end point"})
});
const postJobs = asyncHandler(async (req, res) => {
    console.log("yeah im post jobs");
    res.json({message:"you re hitting the right end point"})
});

module.exports = {
  getJobs,
  postJobs
};
