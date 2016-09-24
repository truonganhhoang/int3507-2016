'use strict';
const
    mongoose = require('mongoose'),
    models = require('../../models');

module.exports = function sendButtonMessage(recipientId) {
    var userId = recipientId;

    function createNewUserWithQuestions(userId) {
        models.User.create({
            userId: userId
        }, function (err, result) {
            console.log(result);
        });

        models.Question.find({}, function(err, result) {
            if (result) {
                ids = [];
                for (i=0; i < result.length; i++) {
                    ids.push({questionId: result._id});
                }
                models.UnlearnedQuestion.create({
                    userId: userId,
                    questionIds: ids
                }, function (err, result) {
                    // return 1 question for user
                    getOneQuestion(result);
                });
            }
        });
    };

    function getOneQuestion(unlearnedQuestion) {
        if (unlearnedQuestion.questionIds.length == 0) {
            let errorText = "Xin lỗi. Mình chưa thể tìm thấy câu hỏi trắc nghiệm nào cho bạn.";
            require('../sendErrorMessage')(recipientId, errorText);
        } else {
            idx = Math.floor(Math.random() * unlearnedQuestion.questionIds.length);
            qs = unlearnedQuestion.questionIds[idx];
            var messageData = {
                recipient: {
                    id: recipientId
                },
                message: {
                    text: qs.question,
                    quick_replies: [
                        {
                            "content_type":"text",
                            "title": 'A. '+ qs.choices[0].text,
                            "payload": qs.choices[0].isAnswer ? "MC_TRUE" : "MC_FALSE"
                        },
                        {
                            "content_type":"text",
                            "title": 'B. '+ qs.choices[1].text,
                            "payload": qs.choices[1].isAnswer ? "MC_TRUE" : "MC_FALSE"
                        },
                        {
                            "content_type":"text",
                            "title": 'C. '+ qs.choices[2].text,
                            "payload": qs.choices[2].isAnswer ? "MC_TRUE" : "MC_FALSE"
                        }
                    ]
                }
            };

            require('../facebook/sendFunctions/callSendAPI')(messageData);
        }
    };

    models.UnlearnedQuestion.findOne({
        userId: userId
    }, function (err, result) {
        if (err) {
            require('../sendErrorMessage')(recipientId);
        }
        else if (!result) {
            // new user
            console.log('new user');
            createNewUserWithQuestions(userId);
        }
        else {
            getOneQuestion(result);
        }
    });
};