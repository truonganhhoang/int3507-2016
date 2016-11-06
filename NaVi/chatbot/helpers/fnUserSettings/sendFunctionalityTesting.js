'use strict';

module.exports = function (recipientId) {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            text: "Mình có thể giúp bạn học tiếng anh bằng những cách sau:",
            quick_replies: [
                {
                    "content_type":"text",
                    "title": 'Học từ mới',
                    "payload": "FUNCTEST_NW"
                },
                {
                    "content_type":"text",
                    "title": 'Làm trắc nghiệm',
                    "payload": "FUNCTEST_MC"
                },
                {
                    "content_type":"text",
                    "title": 'Luyện nghe',
                    "payload": "FUNCTEST_LI"
                }
            ]
        }
    };
    require('../facebook/sendFunctions/callSendAPI')(messageData);
};