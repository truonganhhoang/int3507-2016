'use strict';
const
    redisClient = require('../../caching/redisClient'),
    sendFunctions = require('../facebook/sendFunctions');

module.exports = function (recipientId, recipientMessageText, event) {
    redisClient.hgetall(recipientId, function (err, reply) {
        if (err) {
            console.log(err);
        }
        else if (reply && reply.lastListeningText) {
            // Trim and remove consecutive spaces from user input text
            recipientMessageText = recipientMessageText.replace(/\s+/g, ' ').trim();

            let answerTextSplittedToWords = reply.lastListeningText.split(' '),
                recipientTextSplittedToWords = recipientMessageText.split(' '),
                answerText = '',
                rightWords = 0;

            for (let i = 0; i < answerTextSplittedToWords.length; i++) {
                if (recipientTextSplittedToWords[i] !== undefined &&
                    answerTextSplittedToWords[i].replace(',', '').replace('.', '').toLowerCase()
                    === recipientTextSplittedToWords[i].replace(',', '').replace('.', '').toLowerCase()) {
                    answerText += answerTextSplittedToWords[i];
                    rightWords += 1;
                }
                else {
                    answerText += answerTextSplittedToWords[i].toUpperCase();
                }
                if (i != answerTextSplittedToWords.length - 1) {
                    answerText += ' ';
                }
            }

            let accuracy = rightWords * 100.00/answerTextSplittedToWords.length;
            let botReply = 'Đáp án là: \n"' + answerText + '".\nBạn làm đúng ' + accuracy.toFixed(1) + '% '
                + '(' + rightWords + ' từ)';
            let messageData = {
                recipient: {
                    id: recipientId
                },
                message: {
                    text: botReply,
                    quick_replies: [
                        {
                            "content_type":"text",
                            "title": 'Nghe tiếp',
                            "payload": 'LINEXT'
                        }
                    ]
                }
            };
            sendFunctions.callSendAPI(messageData, function (err) {
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