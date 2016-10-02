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
            console.log(JSON.parse(reply.lastMPQuestion));
            let lastMPQuestion = JSON.parse(reply.lastMPQuestion),
                recipientTypingAnswerIsTrue = false,
                recipientMessageTextIsOneOfTheAnswer = false,
                rightAnswer = 'A. ' + lastMPQuestion.choices[0].text;

            for (let idx = 0; idx < lastMPQuestion.choices.length; idx++) {
                if (lastMPQuestion.choices[idx].isAnswer) {
                    if (idx == 1) {
                        rightAnswer = 'B. ' + lastMPQuestion.choices[idx].text;
                    }
                    else if (idx == 2) {
                        rightAnswer = 'C. ' + lastMPQuestion.choices[idx].text;
                    }
                }
                if (recipientMessageText === lastMPQuestion.choices[idx].text) {
                    recipientMessageTextIsOneOfTheAnswer = true;
                }
                if (recipientMessageText === lastMPQuestion.choices[idx].text && lastMPQuestion.choices[idx].isAnswer == true) {
                    recipientTypingAnswerIsTrue = true;
                    sendFunctions.sendTextMessage(recipientId, 'Chính xác! Đang tải câu hỏi tiếp theo...', function () {
                        // send new question
                        require('../fnMutipleChoices/sendQuestion')(recipientId);
                    });
                    break;
                }
            }
            // If the user is not about to answer (they want to break into other chat context)
            if (recipientMessageTextIsOneOfTheAnswer == false) {
                // Update the context to UNKNOWN
                redisClient.hmset(recipientId, ["context", 'UNKNOWN'], function (err, res) {
                    if (err) {
                        console.log(err)
                    }
                    else if (res) {
                        // Send back to receivedMessage event to do intent-classification
                        require('../facebook/receivedMessage')(event);
                    }
                });
            }
            else if (!recipientTypingAnswerIsTrue) {
                // return the answer
                sendFunctions.sendTextMessage(recipientId, "Sai. Đáp án là: \"" + rightAnswer + "\". Đang tải câu hỏi tiếp theo...", function () {
                    // send new question
                    require('../fnMutipleChoices/sendQuestion')(recipientId);
                });
            }
        }
    });
};