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
var async = require("async");

router.get('/login', (req, res) => {

    var username = req.query.username;
    var password = req.query.password;

    db.findOne(Collect.user, {userName: username}, (result) => {
        if (result) {
            if (result.userPass === password) {

                var id = result._id.toString();

                var token = TokenInfo.init(id, random.generateToken(32), random.generateToken(64));

                db.insertOne(Collect.token, token, (res)=> {
                });

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
    var fullName = req.query.fullName;

    var user = User.init(username, password, '', phone, '', fullName);

    db.findOne(Collect.user, {userName: user.userName}, (result) => {
        if (result) {
            res.send(Resp.error(1, 'Account already exists', null));
        } else {
            db.insertOne(Collect.user, user, (res)=> {
            });

            res.send(Resp.success(null));
        }
        res.end();
    });
});

router.get('/profile', (req, res) => {
    var token = req.get('access_token');
    var resp = {};
    if (token) {
        resp.error = 0;
        resp.message = "";
        db.findOne(Collect.token, {'access_token': token}, (r1) => {
            if (r1) {
                db.findOne(Collect.user, {'_id': new ObjectId(r1.userId)}, (r2) => {
                    resp.data = r2;
                    res.send(resp);
                    res.end();
                });
            } else {
                res.end();
            }
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

router.get('/exam', (req, res) => {
    var token = req.get('access_token');

    var body = {};
    if (token) {
        body.error = 0;
        body.message = "";

        db.findOne(Collect.token, {'access_token': token}, (result) => {
            if (result) {
                db.fetchRows(Collect.exam, {'userIdRef': result.userId}, (results) => {
                    //body.data = items;
                    var items = [];

                    async.each(results, (x, callback) => {


                        db.findOne(Collect.unit, {'_id': new ObjectId(x.unitIdRef)}, (r1) => {

                            if(r1) {
                                var _item = {};
                                var point = 0;

                                _item._id = x._id;
                                _item.time = x.time;
                                _item.createdDate = x.createdDate;
                                _item.unitTitle = r1.unitTitle;
                                _item.unitType = r1.unitType;
                                _item.answer = x.answer;

                                async.series([
                                    (c1) => {
                                        async.each(x.answer, (y, callback1) => {
                                            db.findOne(Collect.question, {"_id": new ObjectId(y.ansId)}, (r2) => {
                                                if(r2) {
                                                    if(r2.correctAns == y.answer) {
                                                        point = point + 1;
                                                    }
                                                    callback1();
                                                } else {
                                                    callback1();
                                                }
                                            });
                                        }, err => {
                                            c1();
                                        });

                                    },
                                    (c2) => {
                                        db.fetchRows(Collect.question, {"unitIdRef": new ObjectId(x.unitIdRef)}, (r3) => {
                                            _item.point = point + "/" + r3.length;
                                            c2();
                                        });
                                    }
                                ], err => {
                                    items.push(_item);
                                    callback();
                                });
                            } else {
                                callback();
                            }
                        });

                    }, err => {
                        body.data = items;
                        res.send(body);
                    });
                });
            } else {
                body.data = "Invalid";
                res.send(body);
                res.end();
            }
        });

    } else {
        body.error = 1;
        body.message = "Invalid token";
        body.data = null;
        res.send(resp);
    }
});

module.exports = router;