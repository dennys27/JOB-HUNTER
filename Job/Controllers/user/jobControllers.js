const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const { Job } = require("../../models/job");







const getJobs = asyncHandler(async (req, res) => {
  await Job.find({}).then((data) => {
     res.status(200).send(data)
    })
});

 
const postJobs = asyncHandler(async (req, res) => { 

  
  let details = {
    companyname: JSON.parse(req.body.key.job).companyname,
    designation: JSON.parse(req.body.key.job).designation,
    jobdescription: JSON.parse(req.body.key.job).jobdescription,
    companylogo: req.body.image,
    jobdesummary: JSON.parse(req.body.key.job).companyname,
    skills: req.body.key.skills,
    location: JSON.parse(req.body.key.job).location,
    aboutcompany: JSON.parse(req.body.key.job).aboutcompany,
    numberofopenings: JSON.parse(req.body.key.job).numberofopenings,
    userid: req.body.key.userId,
    date: req.body.key.date, 
    timeStamp: req.body.key.timeStamp,
  };


  try {
    const user = await Job.create(details);
    console.log(user,"yayyyyyyyyyyyyy");
    res.status(200).json(user)
  } catch (err) {
    console.log(err,"error happened in the job controller service.");
  }

   
});




const applyJob = asyncHandler(async (req, res) => {

  console.log(req.body,"hhhhhhhhhhhhhh");

  try {
    const user = await Job.findByIdAndUpdate(
      req.body.jobId,
      {
        $push:{applicants:req.body.user}
      }
    );
    console.log(user, "yayyyyyyyyyyyyy");
    res.status(200).json(user);
  } catch (err) {
    console.log(err, "error happened in the job controller service.");
  }
});


module.exports = {
  getJobs,
  postJobs,
  applyJob
};
