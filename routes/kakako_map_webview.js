var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/kakao-map', function(req, res, next) {
  res.render('kakao-map', { title: 'Express' });
});

module.exports = router;
