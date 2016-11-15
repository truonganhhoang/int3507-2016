var express = require('express');
var path = require('path');
var router = express.Router();

/* GET users listing. */
router.get('/api/reading', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/reading', 'reading.json'));
});

module.exports = router;
