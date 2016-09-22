'use strict';
var Question = require('../../models').Question;

module.exports = function sendButtonMessage(recipientId) {
    var errorMessage = {
        recipient: {
            id: recipientId
        },
        message: {
            text: 'Sorry. Something\' wrong!',
            metadata: "MULTIPLE_CHOICES"
        }
    };
    Question.findOne({
        level: Math.floor(Math.random() * 4) + 1
    }, function (err, qs) {
        if (err) {
            require('../facebook/sendFunctions/callSendAPI')(errorMessage);
        }
        else if (!qs) {
            require('../facebook/sendFunctions/callSendAPI')(errorMessage);
        }
        else {
            console.log(qs);
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
                            "payload": qs.choices[0].isAnswer == true ? 'IS_ANSWER' : 'IS_NOT_ANSWER'
                        },
                        {
                            "content_type":"text",
                            "title": 'B. '+ qs.choices[1].text,
                            "payload": qs.choices[1].isAnswer == true ? 'IS_ANSWER' : 'IS_NOT_ANSWER'
                        },
                        {
                            "content_type":"text",
                            "title": 'C. '+ qs.choices[2].text,
                            "payload": qs.choices[2].isAnswer == true ? "IS_ANSWER" : "IS_NOT_ANSWER"
                        },
                        {
                            "content_type":"text",
                            "title": 'Stop learning!',
                            "payload": "STOP_MULTIPLE_CHOICES"
                        }
                    ]
                }
            };

            require('../facebook/sendFunctions/callSendAPI')(messageData);
        }
    });
};