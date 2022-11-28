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
 getMessages
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
router.get("/profilecard", verifyToken, profileCard);
router.post("/getuser", verifyToken, getUser);
router.post("/basicinfo", verifyToken, basicInfo);
router.post("/experience", verifyToken,experience );
router.post("/certifications", verifyToken,certifications);
router.post("/education", verifyToken,education);
router.post("/deletedetail", verifyToken, deleteDetail);
router.post("/profilepicture", verifyToken, profile);




//------job-service-------//

router.get("/jobs", verifyToken, getJobs);
router.post("/jobpost", verifyToken, postJobs); 
router.post("/apply", verifyToken, apply);

//------------------//


router.post("/chat", createChat);
router.get("/chat/:userId", userChat);
router.get("/find/:firstId/:secondId", findChat);

router.post("/addMessage", addMessage);
router.get("/getMessages/:chatId", getMessages);



module.exports = router;
