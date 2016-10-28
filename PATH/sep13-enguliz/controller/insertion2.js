/**
 * Created by Thinking on 10/07/2016.
 */
/**
 * Created by Thinking on 09/22/2016.
 */

var express = require('express');
var router = express.Router();
var db = require('../utils/mongo1970');
var Collection = require('../utils/collection');
var Category = require('../models/physical/Category');
var Resp = require('../models/logical/Resp');
var Unit = require('../models/physical/Unit');
var random = require('../utils/random');
var Question = require('../models/physical/Question');
var async = require("async");

router.get('/add', (request, response) => {
    var fs = require('fs');
    fs.readFile('views/form-add.html', 'utf8', (err, contents) => {
        response.send(contents);
        response.end();
    });

});

router.post('/add', (request, response) => {
    var categoryName = request.param('category');
    var unitTitle = request.param('unit');
    var unitSubTitle = request.param('description');
    var unitImageUrl = request.param('image');
    var categoryId = "";
    var thread = request.param('thread');
    var attach = request.param('attach');


    async.parallel([
        (callback) => {
            db.findOne(Collection.category, {"categoryName": categoryName}, (r1) => {
                if(!r1) {
                    var category = Category.init(categoryName,
                        "https://www.socialmediaexplorer.com/wp-content/uploads/2014/03/Listen.jpg");

                    db.insertOne(Collection.category, category,
                        (r2) => {
                            categoryId = category._id;
                            callback();
                        });
                } else {
                    console.log("==>>" + r1._id);
            callback();
        }
            });
        },
        (callback) => {
            var unit = Unit.init(
                unitTitle,
                unitSubTitle,
                unitImageUrl,
                thread,
                random.int(1000),
                categoryId,
                Date(),
                600000,
                categoryName,
                attach
            );
            db.insertOne(Collection.unit, unit, (r1) => { callback(); });
        }
    ], (err) => {
        if(err) response.send("Error");
        response.redirect('home');
        response.end();
    });
});

router.get('/home', (request, response) => {
    var fs = require('fs');
    fs.readFile('views/form-add.html', 'utf8', (err, contents) => {
        response.send(contents);
        response.end();
    });

});

module.exports = router;
