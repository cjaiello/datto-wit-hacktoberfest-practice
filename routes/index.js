var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var host = req.headers['host'];
  console.log(`Host is ${host}`);
  var forwardedIpsStr = req.header('x-forwarded-for'); 
  console.log(`forwardedIpsStr is ${forwardedIpsStr}`);
  res.render('index', { title: 'Express' });
});

module.exports = router;
