var express = require('express');
const {
  adminLogin,
  verifications,
  adminGetUsers,
  adminGetUser,
  adminApprove,
  getAdminJobs,
  postJobs,
  
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

module.exports = router; 
