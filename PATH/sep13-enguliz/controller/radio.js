var radio = require("radio-stream");
var express = require('express');
var router = express.Router();


router.get('/details/audio', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Transfer-Encoding': 'chunked'
    });
});

module.exports = router;