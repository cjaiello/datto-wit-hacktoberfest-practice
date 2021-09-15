var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var host = req.headers['host'];
  console.log(`Host is ${host}`);
  res.render('index', { title: 'Express' });
});

module.exports = router;
