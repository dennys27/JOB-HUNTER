var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.body,"lets figure this out")
  res.send({message:"you are hitting the admin route"})
});

module.exports = router;
