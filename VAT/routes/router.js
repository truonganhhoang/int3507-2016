var express = require('express');
var path = require('path');
var router = express.Router();

/* GET users listing. */
router.get('/api/reading', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/reading', 'reading.json'));
});

router.get('/api/listening', function(req, res, next){
	res.sendFile(path.join(__dirname, '../public/audio', 'track-1.json'));
})
module.exports = router;
