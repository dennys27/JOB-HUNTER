var express = require('express');
const { adminLogin } = require('../Controllers/Admin/adminControllers');
var router = express.Router();

/* GET home page. */
router.post('/login', adminLogin);

module.exports = router; 
