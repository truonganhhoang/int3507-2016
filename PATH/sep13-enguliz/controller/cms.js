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
var fs = require('fs');
var ObjectId = require('mongodb').ObjectID;

router.get('/add', (request, response) => {

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

    async.series([
        (callback) => {
            db.findOne(Collection.category, {"categoryName": categoryName}, (r1) => {
                if (!r1) {
                    var category = Category.init(categoryName,
                        "https://www.socialmediaexplorer.com/wp-content/uploads/2014/03/Listen.jpg");

                    db.insertOne(Collection.category, category,
                        (r2) => {
                            console.log("first ==>>" + category._id);
                            categoryId = category._id;
                            callback();
                        });
                } else {
                    console.log("second ==>>" + r1._id);
                    categoryId = r1._id;
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
            db.insertOne(Collection.unit, unit, (r1) => {
                callback();
            });
        }
    ], (err) => {
        if (err) response.send("Error");
        response.redirect('home');
        response.end();
    });
});

router.get('/home', (request, response) => {
    fs.readFile('views/home.html', 'utf8', (err, contents) => {

        db.fetchAll(Collection.unit, (result) => {
            var units = result;

            var table = '';
            table += "<table class='table'>";
            table += "<thead>" +
                "<tr>" +
                "<th>Id</th>" +
                "<th>Tên</th>" +
                "<th>Lượt xem</th>" +
                "<th>Chuyên mục</th>" +
                "<th>Ảnh</th>" +
                "<th></th>" +
                "</tr>" +
                "</thead><tbody>";
            Array.from(units, (item) => {
                table += "<tr>";
                table += "<td>" + item._id + "</td>";
                table += "<td>" + item.unitTitle + "</td>";
                table += "<td>" + item.unitViews + "</td>";
                table += "<td>" + item.unitType + "</td>";
                table += "<td><img width='64' height='64' src='" + item.unitThumbnail + "'></td>";
                table += "<td><a href='unit/" + item._id + "/edit'>Sửa</a> " +
                    "| <a href='unit/" + item._id + "/add-exercise'>Thêm bài tập</a>" +
                    " | <a href='unit/" + item._id + "/delete'>Xóa</a></td>";
                table += "</tr>";
            });
            table += "</tbody></table>";

            contents = contents.replace("<#table></#table>", table);
            response.write(contents);
            response.end();
        });
    });
});

router.get('/unit/:id/delete', (request, response) => {
    var id = request.params.id;
    db.remove(Collection.unit, {"_id": new ObjectId(id)}, (r1) => {
        response.redirect('/cms/home');
    });
});

router.get('/unit/:id/add-exercise', (request, response) => {
    var id = request.params.id;

    fs.readFile('views/add-work.html', 'utf8', (err, contents) => {
       db.findOne(Collection.unit, {"_id": new ObjectId(id)}, (r1) => {

           var header = "<h3>" + r1.unitTitle + "</h3>" +
               "<h5><i>"+ r1.unitSubTitle + "</i></h5>";

           contents = contents.replace("<#header></#header>", header);
           response.write(contents);
           response.end();
       });
    });
});

router.post('/unit/:id/add-exercise', (request, response) => {
    var id = request.params.id;
    var questionContent = request.param('question');
    var a = request.param('a');
    var b = request.param('b');
    var c = request.param('c');
    var d = request.param('d');
    var correct = request.param('correct');

    db.findOne(Collection.unit, {"_id": new ObjectId(id)}, (r1) => {

        var answers = [];
        var answer = {};

        answer.ansId = "A";
        answer.ansContent = a;
        answers.push(answer);
        answer = {};
        answer.ansId = "B";
        answer.ansContent = b;
        answers.push(answer);
        answer = {};
        answer.ansId = "C";
        answer.ansContent = c;
        answers.push(answer);

        var question = Question.init(questionContent, r1._id, correct, answers);

        db.insert(Collection.question, question, (r2) => {
            response.redirect('add-exercise');
        });
    });


});

module.exports = router;