var express = require('express');
var router = express.Router();
var db = require('../utils/mongo1970');
var mongodb = require('mongodb');
var User = require('../models/physical/User');
var Resp = require('../models/logical/Resp');
var Collect = require('../utils/collection');
var TokenInfo = require('../models/physical/TokenInfo');
var random = require('../utils/random');
var ObjectId = require('mongodb').ObjectID;

router.get('/login', (req, res) => {

    var username = req.query.username;
    var password = req.query.password;

    db.findOne(Collect.user, {userName: username}, (result) => {
        if (result) {
            if (result.userPass === password) {

                var id = result._id.toString();

                var token = TokenInfo.init(id, random.generateToken(32), random.generateToken(64));

                db.insertOne(Collect.token, token, (res)=>{});

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
            db.insertOne(Collect.user, user, (res)=>{});

            res.send(Resp.success(null));
        }
        res.end();
    });
});

router.get('/profile', (req, res) => {
    var token = req.get('access_token');
    var resp = {};
    if(token){
        resp.error = 0;
        resp.message = "";
        db.findOne(Collect.token, {'access_token': token}, (r1) => {
           db.findOne(Collect.user, {'_id': new ObjectId(r1.userId)}, (r2) => {
               resp.data = r2;
               res.send(resp);
               res.end();
           });
        });
    } else {
        resp.error = 1;
        resp.message = "Token invalid";
        resp.data = null;
        res.send(resp);
        res.end();
    }
});

router.get('/logout', (req, res) => {
    var token = req.get('access_token');
    db.remove(Collect.token, {'access_token': token}, (result) => {
        var resp = {};
        resp.error = 0;
        resp.message = "";
        resp.data = null;

        res.send(resp);
        res.end();
    })

});

module.exports = router;