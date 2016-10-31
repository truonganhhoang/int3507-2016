'use strict';
const
    models = require('../../models'),
    sendFunctions = require('../facebook/sendFunctions');

module.exports = function (recipientId, payload) {
    let status = payload.split('_')[1];
    let qId = payload.split('_')[2];  // question's id
    let rightAnswer = payload.split('_')[3];

    if (status === 'TRUE') {
        models.UnlearnedQuestionUser.update({
            $pull: {
                unlearnedQuestions: {
                    questionId: qId
                }
            }
        }).exec(function (err) {
            if (err) {
                console.log(err);
            }
            else {
                sendFunctions.sendTextMessage(recipientId, 'Chính xác! Đang tải câu hỏi tiếp theo...', function () {
                    // send new question
                    require('../fnMutipleChoices/sendQuestion')(recipientId);
                });
            }
        });
    }
    else if (status === 'FALSE') {
        // return the answer
        sendFunctions.sendTextMessage(recipientId, "Sai. Đáp án là: \"" + rightAnswer + "\". Đang tải câu hỏi tiếp theo...", function () {
            // send new question
            require('../fnMutipleChoices/sendQuestion')(recipientId);
        });
    }
};