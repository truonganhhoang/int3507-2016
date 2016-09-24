'use strict';
var Question = require('../../models').Question;

module.exports = function sendButtonMessage(recipientId) {
    Question.findOne({
        level: Math.floor(Math.random() * 4) + 1
    }, function (err, qs) {
        if (err) {
            require('../sendErrorMessage')(recipientId);
        }
        else if (!qs) {
            let errorText = "Xin lỗi. Mình chưa thể tìm thấy câu hỏi trắc nghiệm nào cho bạn.";
            require('../sendErrorMessage')(recipientId, errorText);
        }
        else {
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
    });
};