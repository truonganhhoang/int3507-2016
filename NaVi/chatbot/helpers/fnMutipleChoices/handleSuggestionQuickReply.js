'use strict';
const
    redisClient = require('../../caching/redisClient'),
    sendFunctions = require('../facebook/sendFunctions');

module.exports = function (recipientId, payload, event) {
    let suggestionIsMatch = payload.split('_')[1] == 'TRUE';
    if (suggestionIsMatch) {
        let userAnswer = payload.split('_')[2],
            rightAnswer = payload.split('_')[3],
            answerToCompare = rightAnswer.split('.')[1].substring(1);
        if (userAnswer == answerToCompare) {
            sendFunctions.sendTextMessage(recipientId, 'Chính xác! Đang tải câu hỏi tiếp theo...', function () {
                // send new question
                require('../fnMutipleChoices/sendQuestion')(recipientId);
            });
        }
        else {
            sendFunctions.sendTextMessage(recipientId, "Sai. Đáp án là: \"" + rightAnswer + "\". Đang tải câu hỏi tiếp theo...", function () {
                // send new question
                require('../fnMutipleChoices/sendQuestion')(recipientId);
            });
        }
    }
    else {
        redisClient.hmset(recipientId, ["context", 'UNKNOWN'], function (err, res) {
            if (err) {
                console.log(err)
            }
            else if (res) {
                event.message.quick_reply = null;
                event.message.messageText = payload.split('_')[3];
                require('../facebook/receivedMessage')(event);
            }
        });
    }
};