/**
 * Created by Thinking on 09/14/2016.
 */
var express = require('express');
var path = require('path');

var allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, access_token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
}

var bodyParser = require('body-parser');

var user = require('./controller/user');
var theory = require('./controller/theory');
var index = require('./controller/index');
var insert = require('./controller/insertion');
var insert2 = require('./controller/insertion2');
var media = require('./controller/media');
var details = require('./controller/details');

var app = express();

app.set("views", path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(allowCrossDomain);

app.use('/api/v1/user', user);
app.use('/api/v1/theory', theory);
app.use('/api/v1', index);
app.use('/api/v1/insert', insert);
app.use('/cms', insert2);
app.use('/api/v1/details', details);
app.use('/media', media);

app.listen(8080, () => {});

module.exports = app;