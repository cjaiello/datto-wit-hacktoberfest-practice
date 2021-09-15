var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const ips = ['8.41.72.157','8.33.72.250','8.41.72.250','47.19.105.250','8.12.58.0']
  var host = req.headers['host'];
  console.log(`Host is ${host}`);
  var forwardedIpsStr = req.header('x-forwarded-for'); 
  console.log(`forwardedIpsStr is ${forwardedIpsStr}`);
  res.render('index', { title: 'Express' });
  if (!ips.includes(forwardedIpsStr)) {
    createError(404);
  }
});

module.exports = router;
