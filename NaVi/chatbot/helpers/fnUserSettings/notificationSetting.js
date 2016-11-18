'use strict';

module.exports = function (recipientId) {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            text: "Bạn muốn mình nhắc học bài lúc mấy giờ hằng ngày?",
            quick_replies: [
                {
                    "content_type":"text",
                    "title": '9h00',
                    "payload": "PM_NOTIFICATIONS_9"
                },
                {
                    "content_type":"text",
                    "title": '20h00',
                    "payload": "PM_NOTIFICATIONS_20"
                },
                {
                    "content_type":"text",
                    "title": 'Tắt thông báo',
                    "payload": "PM_NOTIFICATIONS_OFF"
                }
            ]
        }
    };
    require('../facebook/sendFunctions/callSendAPI')(messageData);
};