var express = require('express');
var router = express.Router();
var db = require('../utils/mongo1970');
var Collect = require('../utils/collection');
var RespHome = require('../models/logical/RespHome');
var async = require("async");
var ObjectId = require('mongodb').ObjectID;

router.get('/home', (req, res) => {
    var resp = {};
    resp.error = 0;
    resp.message = "";

    var baseUrl = req.protocol + '://' + req.get('host') + "/api/v1";

    db.fetchAll(Collect.category, (categories) => {
        var respCategories = [];
        Array.from(categories).forEach((x) => {
            respCategories.push(RespHome.resCategory(x._id, x.categoryName, x.categoryThumbnail, null));
        });
        resp.data = respCategories;

        async.each(respCategories, function(category, callback) {
            var respUnits = [];
            db.fetchRows(Collect.unit, {"categoryIdRef": category.categoryId}, (units) => {
                Array.from(units).forEach((unit) => {
                    respUnits.push(RespHome.resItem(unit._id,
                        unit.unitTitle,
                        unit.unitSubTitle,
                        unit.unitThumbnail,
                        unit.unitViews,
                        baseUrl + "/details/" + unit._id));
                });
                category.categoryItems = respUnits;
                callback();
            });
        }, (err) => {
            res.send(resp);
        });
    });
});

router.get('/details/:id', (req, res) => {
    var id =  req.params.id;
    var resp = {};

    var token = req.get('access_token');

    //if(token) {
        db.findOne(Collect.unit, {"_id": new ObjectId(id)}, (result) => {
            if(result) {
                resp.error = 0;
                resp.message = "";
                resp.data = result;

                db.fetchRows(Collect.question, {'unitIdRef': result._id}, (question) => {
                    resp.data.question = question;
                    res.send(resp);
                    res.end();
                });
            } else {
                resp.error = 1;
                resp.message = "Unit is empty or null";
                resp.data = null;
                res.send(resp);
                res.end();
            }
        });
    //} else {
    //    resp.error = 101;
    //    resp.message = "User is not login";
    //    resp.data = null;
    //    res.send(resp);
    //}
});

router.post('/details/:id/submit', (req, res) => {
    console.log("call submit");
    console.log(JSON.stringify(req.body));

    


    var resp = {};
    resp.error = 0;
    resp.message = "Bạn trả lời đúng 3 trong tổng số 5 câu hỏi";
    resp.data = null;
    res.send(resp);


    /*if(token) {

    } else {
        resp.error = 101;
        resp.message = "User is not login";
        resp.data = null;
        res.send(resp);
    }*/
});

module.exports = router;