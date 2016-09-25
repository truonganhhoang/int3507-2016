'use strict';

module.exports = function sendTextMessage(recipientId, messageText, callback) {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            text: messageText,
            metadata: "DEVELOPER_DEFINED_METADATA"
        }
    };
    require('./callSendAPI')(messageData, function (err) {
        if (!err) {
            if (callback) {
                console.log('Callback is called');
                callback(null);
            }
        }
    });
};