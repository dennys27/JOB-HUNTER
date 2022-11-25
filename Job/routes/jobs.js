var express = require("express");
const { getJobs, postJobs, applyJob } = require("../Controllers/User/jobControllers");
var router = express.Router();



router.get("/jobs",getJobs); 
router.post("/job",postJobs); 
router.post("/apply",applyJob); 



module.exports = router;