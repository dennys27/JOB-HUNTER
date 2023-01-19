const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const { Job } = require("../../models/job");
require("dotenv").config();






const getJobs = asyncHandler(async (req, res) => {
  await Job.find({}).then((data) => {
     res.status(200).send(data)
    })
});

const getMyJobs = asyncHandler(async (req, res) => {
  await Job.find({userid:req.body.userId}).then((data) => {
     res.status(200).send(data)
  }).catch((err) => {
    res.status(500).send(err);
  })
});

 
const postJobs = asyncHandler(async (req, res) => { 

console.log(JSON.parse(req.body.key.job).jobsummary)
  
  let details = {
    companyname: JSON.parse(req.body.key.job).companyname,
    designation: JSON.parse(req.body.key.job).designation,
    jobdescription: JSON.parse(req.body.key.job).jobdescription,
    companylogo: req.body.image,
    jobsummary: JSON.parse(req.body.key.job).jobsummary,
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
    res.status(200).json(user)
  } catch (err) {
    console.log(err,"error happened in the job controller ");
  }

   
});




const applyJob = asyncHandler(async (req, res) => {
 
  let isExist = await Job.find(
    { _id: req.body.jobId,
      applicants: { $elemMatch: { _id: req.body.user._id } },
    }
  );

  if (isExist.length!==0) {
    res.status(200).json({ isExist ,exist:true});
  } else {
    try {
     
         const user = await Job.findByIdAndUpdate(req.body.jobId, {
           $push: { applicants: req.body.user },
           
       });

       res.status(200).json(user);
     } catch (err) {
       res.status(500).json(err);
       console.log(err, "error happened in the job controller");
     }
  }

 

});


module.exports = {
  getJobs,
  postJobs,
  applyJob,
  getMyJobs,
};
