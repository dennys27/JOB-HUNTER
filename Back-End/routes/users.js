var express = require('express');
const { registerUser, loginUser } = require('../Controllers/User/userControllers');
var router = express.Router();

/* GET users listing. */
router.post('/login',loginUser );
router.post('/register', registerUser);

module.exports = router;
