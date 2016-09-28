var express = require('express');
var router = express.Router();
var db = require('../utils/mongo1970');
var mongodb = require('mongodb');
var User = require('../models/physical/User');
var Resp = require('../models/logical/Resp');
var Collect = require('../utils/collection');
var TokenInfo = require('../models/physical/TokenInfo');

router.get('/login', (req, res) => {

    var username = req.query.username;
    var password = req.query.password;

    db.findOne(Collect.user, {userName: username}, (result) => {
        if (result) {
            if (result.userPass === password) {

                var id = result._id.toString();

                var token = TokenInfo.init(id, generateToken(32), generateToken(64));

                db.insert(Collect.token, token);

                res.send(Resp.login(token.access_token, token.refresh_token));
            } else {
                res.send(Resp.error(1, 'Password is correct', null));
            }
        }
        res.end();
    });

});

router.get('/register', (req, res) => {

    var username = req.query.username;
    var password = req.query.password;
    var phone = req.query.phone;

    var user = User.init(username, password, '', phone, '');

    db.findOne(Collect.user, {userName: user.userName}, (result) => {
        if (result) {
            res.send(Resp.error(1, 'Account already exists', null));
        } else {
            db.insert(Collect.user, user);

            res.send(Resp.success(null));
        }
        res.end();
    });
});

module.exports = router;

var generateToken = (x) =>
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < x; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}