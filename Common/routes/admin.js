var express = require('express');
const {
  adminLogin,
  verifications,
  adminGetUsers,
  adminGetUser,
  adminApprove,
  getAdminJobs,
  postJobs,
  adminGetReportedUsers,
  adminDeleteProfile,
  adminGetReportedPosts,
  adminDeletePost,
  
} = require("../Controllers/Admin/adminControllers");
var router = express.Router();

/* GET home page. */
router.post('/login', adminLogin);
router.get('/verifications', verifications);
router.post("/admingetuser", adminGetUser);
router.get("/admingetusers", adminGetUsers);
router.post("/approve", adminApprove);
router.get("/getAdminJobs", getAdminJobs);
router.post("/jobpost", postJobs); 
router.get("/reportedusers", adminGetReportedUsers); 
router.get("/deleteProfile", adminDeleteProfile); 
router.get("/reportedposts", adminGetReportedPosts); 
router.post("/deletepost", adminDeletePost); 

module.exports = router; 
