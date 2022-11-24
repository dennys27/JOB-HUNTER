var express = require("express");
const { getJobs, postJobs } = require("../Controllers/User/jobControllers");
var router = express.Router();



router.get("/jobs",getJobs); 
router.post("/job",postJobs); 



module.exports = router;