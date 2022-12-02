var express = require('express');
const {
  registerUser,
  loginUser,
  forgotPassword,
  emailVerification,
  post,
  feeds,
  Like,
  Comment,
  profileCard,
  getUser,
  basicInfo,
  experience,
  certifications,
  education,
 deleteDetail,
 profile,
 getJobs,
 postJobs,
 apply,
 createChat,
 userChat,
 findChat,
 addMessage,
 getMessages,
 getUsers,
 request,
 getUserRequests,
 acceptRequest,
 rejectRequest,
 getmyjob,
 profileVerification,
 reportUser
} = require("../Controllers/User/userControllers");
const { verifyToken } = require('./Middlewares/JwtVerification');
var router = express.Router();




/* GET users listing. */
router.post('/login',loginUser );
router.post('/register', registerUser);
router.post("/forgotpassword", forgotPassword); 
router.post("/emailverification",emailVerification);
router.get("/feed", verifyToken, feeds);
router.post('/posts',verifyToken, post);
router.post('/like',verifyToken, Like);
router.post('/comment',verifyToken, Comment);
router.post("/profilecard", verifyToken, profileCard);
router.post("/getuser", verifyToken, getUser);
router.get("/getusers", verifyToken, getUsers);
router.post("/basicinfo", verifyToken, basicInfo);
router.post("/experience", verifyToken,experience );
router.post("/certifications", verifyToken,certifications);
router.post("/education", verifyToken,education);
router.post("/deletedetail", verifyToken, deleteDetail);
router.post("/profilepicture", verifyToken, profile);
router.post("/request", verifyToken, request);
router.post("/connections", verifyToken, profile);
router.post("/getUserRequests", verifyToken, getUserRequests);
router.post("/acceptRequest", verifyToken, acceptRequest);
router.post("/rejectRequest", verifyToken, rejectRequest);
router.post("/profileVerification", verifyToken, profileVerification);
router.post("/reportuser",verifyToken,reportUser);




//------job-service-------//

router.get("/jobs", verifyToken, getJobs);
router.post("/jobpost", verifyToken, postJobs); 
router.post("/apply", verifyToken, apply);
router.post("/getmyjobs", verifyToken, getmyjob);

//------------------//


router.post("/chat", createChat);
router.get("/chat/:userId", userChat);
router.get("/find/:firstId/:secondId", findChat);

router.post("/addMessage", addMessage);
router.get("/getMessages/:chatId", getMessages);



module.exports = router;
