'use strict';
const
    models = require('../../models'),
    redisClient = require('../../caching/redisClient'),
    sendFunctions = require('../facebook/sendFunctions'),
    JWDistance = require('jaro-winkler'),
    RATE_TO_SUGGEST = 0.8;

module.exports = function (recipientId, recipientMessageText, event) {
    redisClient.hgetall(recipientId, function (err, reply) {
        if (err) {
            console.log(err);
        }
        else {
            let lastMCQuestion = JSON.parse(reply.lastMCQuestion),
                recipientTypingAnswerIsTrue = false,
                recipientMessageTextIsOneOfTheAnswer = false,
                rightAnswer = 'A. ' + lastMCQuestion.choices[0].text,
                needSuggestion = false,
                choiceToSuggest = "",
                choiceToSuggestWithPosition = "";

            // If user just type A, B, C as the answer
            // So we do replace A, B, C with the real answer text before go to compare step below
            if (recipientMessageText == 'A' || recipientMessageText == 'a') {
                recipientMessageText = lastMCQuestion.choices[0].text;
            }
            else if (recipientMessageText == 'B' || recipientMessageText == 'b') {
                recipientMessageText = lastMCQuestion.choices[1].text;
            }
            else if (recipientMessageText == 'C' || recipientMessageText == 'c') {
                recipientMessageText = lastMCQuestion.choices[2].text;
            }

            for (let idx = 0; idx < lastMCQuestion.choices.length; idx++) {
                if (lastMCQuestion.choices[idx].isAnswer) {
                    if (idx == 1) {
                        rightAnswer = 'B. ' + lastMCQuestion.choices[idx].text;
                    }
                    else if (idx == 2) {
                        rightAnswer = 'C. ' + lastMCQuestion.choices[idx].text;
                    }
                }
                if (recipientMessageText === lastMCQuestion.choices[idx].text) {
                    recipientMessageTextIsOneOfTheAnswer = true;
                }
                if (recipientMessageText === lastMCQuestion.choices[idx].text && lastMCQuestion.choices[idx].isAnswer == true) {
                    recipientTypingAnswerIsTrue = true;
                    sendFunctions.sendTextMessage(recipientId, 'Chính xác! Đang tải câu hỏi tiếp theo...', function () {
                        // send new question
                        require('../fnMutipleChoices/sendQuestion')(recipientId);
                    });
                    break;
                }
                let similarity = JWDistance(recipientMessageText.toLowerCase(), lastMCQuestion.choices[idx].text.toLowerCase());
                if (similarity >= RATE_TO_SUGGEST) {
                    needSuggestion = true;
                    let choicePosition = (idx == 0) ? 'A. ' : ((idx == 1) ? 'B. ' : 'C. ');
                    choiceToSuggest = lastMCQuestion.choices[idx].text;
                    choiceToSuggestWithPosition =  choicePosition + lastMCQuestion.choices[idx].text;
                }
            }
            if (recipientMessageTextIsOneOfTheAnswer == false && needSuggestion == true) {
                var messageData = {
                    recipient: {
                        id: recipientId
                    },
                    message: {
                        text: "Có phải bạn muốn chọn đáp án: \"" + choiceToSuggestWithPosition + "\"",
                        quick_replies: [
                            {
                                "content_type":"text",
                                "title": 'Đúng vậy!',
                                "payload": "MCSUGGESTION_TRUE_" + choiceToSuggest + "_" + rightAnswer
                            },
                            {
                                "content_type":"text",
                                "title": 'Không',
                                "payload": "MCSUGGESTION_FALSE_" + recipientMessageText
                            }
                        ]
                    }
                };
                require('../facebook/sendFunctions/callSendAPI')(messageData);
            }
            // If the user is not about to answer (they want to break into other chat context)
            else if (recipientMessageTextIsOneOfTheAnswer == false && needSuggestion == false) {
                // Update the context to UNKNOWN
                redisClient.hmset(recipientId, ["context", 'UNKNOWN'], function (err, res) {
                    if (err) {
                        console.log(err);
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