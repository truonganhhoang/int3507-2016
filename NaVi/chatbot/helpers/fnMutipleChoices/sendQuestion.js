'use strict';
const
    mongoose = require('mongoose'),
    models = require('../../models');

module.exports = function sendButtonMessage(recipientId) {
    // find unlearned question of "recipientId"
    models.UnlearnedQuestion.findOne({
        userId: recipientId
    }, function (err, uQuestion) {
        if (err) {
            require('../sendErrorMessage')(recipientId);
        }
        else if (!uQuestion) {
            console.log("Creating new user.");
            createNewUserWithQuestions(recipientId);
        }
        else {
            getOneQuestion(uQuestion, recipientId);
        }
    });

    function createNewUserWithQuestions(recipientId) {
        models.User.create({
            _id: recipientId
        }, function (err, user) {
            if (err) {
                console.log(err);
            }
            else if (user) {
                console.log("New user created.");

                // get all available questions' ids to push into user's unlearned questions
                models.Question.find({}, function(err, questions) {
                    if (questions) {
                        var ids = [];
                        for (var i=0; i < questions.length; i++) {
                            ids.push({questionId: questions[i]._id});
                        }
                        console.log("Creating unlearned question set for new user.");
                        models.UnlearnedQuestion.create({
                            userId: recipientId,
                            questionIds: ids
                        }, function (err, result) {
                            if (err) {
                                console.log(err);
                            }
                            else if (result) {
                                console.log("Unlearned question set for new user created.");
                                // return 1 question for user
                                getOneQuestion(result, recipientId);
                            }
                        });
                    }
                });
            }
        });
    };

    function getOneQuestion(unlearnedQuestion, recipientId) {
        if (unlearnedQuestion.questionIds.length == 0) {
            let errorText = "Xin lỗi. Mình chưa thể tìm thấy câu hỏi trắc nghiệm nào cho bạn.";
            require('../sendErrorMessage')(recipientId, errorText);
        } else {
            // get a random question in unlearned question set
            var idx = Math.floor(Math.random() * unlearnedQuestion.questionIds.length);
            var qs = unlearnedQuestion.questionIds[idx];
            models.Question.findOne({
                _id: qs.questionId
            }, function (err, question) {
                // append question's id to payload to know which question the user
                // answered to later
                var mcTrue = "MC_TRUE_" + question._id;
                var mcFalse = "MC_FALSE_" + question._id;

                var messageData = {
                    recipient: {
                        id: recipientId
                    },
                    message: {
                        text: question.question,
                        quick_replies: [
                            {
                                "content_type":"text",
                                "title": 'A. '+ question.choices[0].text,
                                "payload": question.choices[0].isAnswer ? mcTrue : mcFalse
                            },
                            {
                                "content_type":"text",
                                "title": 'B. '+ question.choices[1].text,
                                "payload": question.choices[1].isAnswer ? mcTrue : mcFalse
                            },
                            {
                                "content_type":"text",
                                "title": 'C. '+ question.choices[2].text,
                                "payload": question.choices[2].isAnswer ? mcTrue : mcFalse
                            }
                        ]
                    }
                };

                require('../facebook/sendFunctions/callSendAPI')(messageData);
            });
        }
    };
};