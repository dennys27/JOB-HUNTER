var express = require("express");
const { getJobs, postJobs, applyJob, getMyJobs } = require("../Controllers/User/jobControllers");
var router = express.Router();



router.get("/jobs",getJobs); 
router.post("/job",postJobs); 
router.post("/apply",applyJob); 
router.post("/getmyjobs",getMyJobs); 



module.exports = router;