var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/api/reading', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/reading', 'reading.json'));
});

router.get('/api/listening', function(req, res, next){
	res.sendFile(path.join(__dirname, '../public/audio', 'track.json'));
});

router.get('/api/reading/advanced', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/reading', 'paragraph.json'));
});

router.get('/api/writing', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/writing', 'writing.json'));
});

module.exports = router;
