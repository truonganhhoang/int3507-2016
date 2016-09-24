var express = require('express');
var router = express.Router();
var db = require('../utils/mongo1970');
var Collect = require('../utils/collection');
var RespHome = require('../models/logical/RespHome');
var async = require("async");


router.get('/home', function(req, res) {
    var resp = {};
    resp.error = 0;
    resp.message = "";

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
                        ""));
                });
                category.categoryItems = respUnits;
                callback();
            });
        }, (err) => {
            res.send(resp);
        });
    });
});

module.exports = router;