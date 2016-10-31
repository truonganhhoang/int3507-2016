var express = require('express');
var router = express.Router();
var db = require('../utils/mongo1970');
var Collection = require('../utils/collection');
var RespHome = require('../models/logical/RespHome');
var async = require("async");
var Exam = require('../models/physical/Exam');

router.get('/home', (req, res) => {
    var resp = {};
    resp.error = 0;
    resp.message = "";

    var baseUrl = req.protocol + '://' + req.get('host') + "/api/v1";

    db.fetchAll(Collection.category, (categories) => {
        var respCategories = [];
        Array.from(categories).forEach((x) => {
            respCategories.push(RespHome.resCategory(x._id, x.categoryName, x.categoryThumbnail, null));
        });
        resp.data = respCategories;

        async.each(respCategories, function (category, callback) {
            var respUnits = [];
            db.fetchRows(Collection.unit, {"categoryIdRef": category.categoryId}, (units) => {
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

router.get('/category/:id', (request, response) => {
    var resp = {};

    var id = request.params.id;

    db.findOne(Collection.category, {"categoryName": id}, (r1) => {
        if(r1) {
            resp.error = 0;
            resp.message = "";
            resp.data = r1;
            db.fetchRows(Collection.unit, {"unitType": r1.categoryName}, (r2) => {
                resp.data.categoryItems = r2;
                response.send(resp);
                response.end();
            });
        } else {
            resp.error = 1;
            resp.message = "Category not found";
            resp.data = null;

            response.send(resp);
            response.end();
        }
    });
});

module.exports = router;