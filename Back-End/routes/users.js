var express = require('express');
const { registerUser, loginUser } = require('../Controllers/User/userControllers');
const { verifyToken } = require('./Middlewares/JwtVerification');
var router = express.Router();

/* GET users listing. */
router.post('/login',loginUser );
router.post('/register', registerUser);
router.post('/feed',verifyToken, registerUser);

module.exports = router;
