'use strict';
const
    redisClient = require('../../caching/redisClient'),
    sendFunctions = require('../facebook/sendFunctions');

module.exports = function (recipientId, recipientMessageText, event) {
    redisClient.hgetall(recipientId, function (err, reply) {
        if (err) {
            console.log(err);
        }
        else if (reply && reply.test) {
            var answer = reply.answer;

            // Trim and remove consecutive spaces from user input text
            recipientMessageText = recipientMessageText.replace(/\s+/g, ' ').trim();

            let answerTextSplittedToWords = reply.answer.split(','),
                recipientTextSplittedToWords = recipientMessageText.split(','),
                answerText = '',
                rightWords = 0;

            for (let i = 0; i < answerTextSplittedToWords.length; i++) {
                if (recipientTextSplittedToWords[i] !== undefined &&
                    answerTextSplittedToWords[i] === recipientTextSplittedToWords[i].toLowerCase().trim()) {
                    answerText += answerTextSplittedToWords[i];
                    rightWords += 1;
                }
                else {
                    answerText += answerTextSplittedToWords[i].toUpperCase();
                }
                if (i != answerTextSplittedToWords.length - 1) {
                    answerText += ', ';
                }
            }

            var botReply = 'Đáp án là: \n"' + answerText + '".\nBạn làm đúng ' + rightWords + '/'
                + answerTextSplittedToWords.length + ' từ.';

            sendFunctions.sendTextMessage(recipientId, botReply, function(err) {
                if (err) {
                    console.log(err);
                }
                else {
                    redisClient.hmset(recipientId, ['context', 'UNKNOWN']);
                }
            });
        }
        else {
            redisClient.hmset(recipientId, ['context', 'UNKNOWN']);
            require('../facebook/receivedMessage')(event);
        }
    });
};