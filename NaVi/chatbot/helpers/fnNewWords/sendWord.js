'use strict';
const
    request = require('request'),
    NewWord = require('../../models').NewWord;


module.exports = function (recipientId) {
    // get a random word from database
    NewWord.count().exec(function(err, count){
        var random = Math.floor(Math.random() * count);

        NewWord.findOne().skip(random).exec(
            function (err, result) {
                var messageData = {
                    recipient: {
                        id: recipientId
                    },
                    message: {
                        text: result.word + ' ' + result.type +
                                '\n' + result.pronunciation + '\n' + result.meaning,
                        quick_replies: [
                            {
                                "content_type":"text",
                                "title": 'Từ khác',
                                "payload": "NW_NEXT"
                            }
                        ]
                    }
                };

                require('../facebook/sendFunctions/callSendAPI')(messageData);
            }
        );
    });
};