var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
  console.log(req.body,"yoooooooooooooooooooooooooo");
  res.send('you are hitting the user route...');
});
router.post('/register', function (req, res, next) {
  console.log(req.body,"registerrrrr");
  res.send('you are hitting the user route...');
});

module.exports = router;
