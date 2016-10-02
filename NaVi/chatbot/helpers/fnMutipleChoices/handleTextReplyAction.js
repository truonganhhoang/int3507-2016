'use strict';
const
    models = require('../../models'),
    redisClient = require('../../caching/redisClient'),
    sendFunctions = require('../facebook/sendFunctions');

module.exports = function (recipientId, recipientMessageText, event) {
    redisClient.hgetall(recipientId, function (err, reply) {
        if (err) {
            console.log(err);
        }
        else {
            models.Question.findById(reply.lastMPQuestionId, function (err, qs) {
                let recipientTypingAnswerIsTrue = false,
                    recipientMessageTextIsOneOfTheAnswer = false,
                    rightAnswer = 'A. ' + qs.choices[0].text;

                for (let idx = 0; idx < qs.choices.length; idx++) {
                    if (qs.choices[idx].isAnswer) {
                        if (idx == 1) {
                            rightAnswer = 'B. ' + qs.choices[idx].text;
                        }
                        else if (idx == 2) {
                            rightAnswer = 'C. ' + qs.choices[idx].text;
                        }
                    }
                    if (recipientMessageText === qs.choices[idx].text) {
                        recipientMessageTextIsOneOfTheAnswer = true;
                    }
                    if (recipientMessageText === qs.choices[idx].text && qs.choices[idx].isAnswer == true) {
                        recipientTypingAnswerIsTrue = true;
                        sendFunctions.sendTextMessage(recipientId, 'Chính xác! Đang tải câu hỏi tiếp theo...', function () {
                            // send new question
                            require('../fnMutipleChoices/sendQuestion')(recipientId);
                        });
                        break;
                    }
                }
                if (recipientMessageTextIsOneOfTheAnswer == false) {
                    redisClient.hmset(recipientId, ["context", 'UNKNOWN'], function (err, res) {
                        if (err) {
                            console.log(err)
                        }
                        else if (res) {
                            require('../facebook/receivedMessage')(event);
                        }
                    });
                }
                else if (recipientTypingAnswerIsTrue == false) {
                    // return the answer
                    sendFunctions.sendTextMessage(recipientId, "Sai. Đáp án là: \"" + rightAnswer + "\". Đang tải câu hỏi tiếp theo...", function () {
                        // send new question
                        require('../fnMutipleChoices/sendQuestion')(recipientId);
                    });
                }
            });
        }
    });
};