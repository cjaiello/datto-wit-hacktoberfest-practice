var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const ips = ['8.41.72.157/32','8.33.72.250/32','8.41.72.250/32','47.19.105.250/32','8.12.58.0/24']
  var host = req.headers['host'];
  console.log(`Host is ${host}`);
  var forwardedIpsStr = req.header('x-forwarded-for'); 
  console.log(`forwardedIpsStr is ${forwardedIpsStr}`);
  res.render('index', { title: 'Express' });
  if (!ips.includes(forwardedIpsStr)) {
    next(createError(404));
  }
});

module.exports = router;
