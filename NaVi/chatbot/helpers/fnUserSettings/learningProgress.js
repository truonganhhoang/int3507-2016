'use strict';

const
    sendFunctions = require('../facebook/sendFunctions'),
    request = require('request'),
    env = require('../env'),
    models = require('../../models');

module.exports = function (recipientId) {
    // Count the number of questions that user has answered
    models.Question.count({}, function(err, totalQuestions) {
        models.UnlearnedQuestionUser.findOne({facebookId: recipientId}, function(err, result) {
            var unlearnedQuestions = 0;
            if (! result) {
                // user does not exist => user has not used question feature
                unlearnedQuestions = totalQuestions;
            } else {
                unlearnedQuestions = result.unlearnedQuestions.length;
                console.log(result);
            }
            // Count the number of new words that user has learned
            models.NewWord.count({}, function(err, totalNewWords) {
                models.UnlearnedWordUser.findOne({facebookId: recipientId}, function(err, result) {
                    var unlearnedNewWords = 0;
                    if (! result) {
                        // user does not exist => user has not used new word feature
                        unlearnedNewWords = totalNewWords;
                    } else {
                        unlearnedNewWords = result.unlearnedWords.length;
                    }

                    var learnedQuestions = totalQuestions - unlearnedQuestions;
                    var learnedNewWords = totalNewWords - unlearnedNewWords;

                    sendFunctions.sendTextMessage(recipientId, `Tiến trình học tập:\n`
                    + `** Câu hỏi trắc nghiệm:\n`
                    + `Đã làm: ${learnedQuestions} câu\n`
                    + `Còn lại: ${unlearnedQuestions} câu\n`
                    + `** Từ mới:\n`
                    + `Đã học: ${learnedNewWords} từ\n`
                    + `Còn lại: ${unlearnedNewWords} từ\n`);
                });
            });
        });
    });
};