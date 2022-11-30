var express = require('express');
const {
  adminLogin,
  verifications,
  adminGetUsers,
  adminGetUser,
  
} = require("../Controllers/Admin/adminControllers");
var router = express.Router();

/* GET home page. */
router.post('/login', adminLogin);
router.get('/verifications', verifications);
router.get("/admingetuser", adminGetUser);
router.get("/admingetusers", adminGetUsers);

module.exports = router; 
