'use strict';
const
    bodyParser = require('body-parser'),
    express = require('express'),
    https = require('https'),
    request = require('request'),
    verifyRequestSignature = require('./middlewares/verifyRequestSignature'),
    env = require('./helpers/env'),
    controllers = require('./controllers'),
    facebook = controllers.facebook;

var app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(bodyParser.json({ verify: verifyRequestSignature }));
app.use(express.static('public'));

// Get web hook
app.get('/webhook', facebook.getWebhook);

// Post web hook
app.post('/webhook', facebook.postWebhook);

// Get authorize
app.get('/authorize', facebook.getAuthorize);

// Start node server
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

