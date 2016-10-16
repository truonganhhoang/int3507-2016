/**
 * Created by Thinking on 10/16/2016.
 */
var express = require('express');
var router = express.Router();
var db = require('../utils/mongo1970');
var Collection = require('../utils/collection');
var RespHome = require('../models/logical/RespHome');
var ObjectId = require('mongodb').ObjectID;
var Exam = require('../models/physical/Exam');

router.get('/:id', (req, res) => {
    var id =  req.params.id;
    var resp = {};

    var token = req.get('access_token');

    //if(token) {
    db.findOne(Collection.unit, {"_id": new ObjectId(id)}, (result) => {
        if(result) {
            resp.error = 0;
            resp.message = "";
            resp.data = result;

            db.fetchRows(Collection.question, {'unitIdRef': result._id}, (question) => {
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

router.post('/:id/submit', (req, res) => {

    var unitId =  req.params.id;
    var token = req.get('access_token');
    var body = req.body;

    if(token) {
        db.findOne(Collection.token, {'access_token': token}, (tk) => {
            if(tk) {
                var userId = tk.userId;
                var exam = Exam.init(userId, unitId, body.answer, body.time);
                db.insertOne(Collection.exam, exam, (result) => {
                    var resp = {};
                    resp.error = 0;
                    resp.message = "Bạn trả lời đúng 3 trong tổng số 5 câu hỏi";
                    resp.data = null;
                    res.send(resp);
                });
            }
        });
    }

});

router.get('/:id/checkout', (req, res) => {
    
});

module.exports = router;