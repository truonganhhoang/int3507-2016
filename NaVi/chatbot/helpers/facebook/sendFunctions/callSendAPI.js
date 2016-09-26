'use strict';
const
    request = require('request'),
    env = require('../../env');

module.exports = function callSendAPI(messageData, callback) {
    request({
        uri: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: env.PAGE_ACCESS_TOKEN },
        method: 'POST',
        json: messageData

    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var recipientId = body.recipient_id;
            var messageId = body.message_id;

            if (messageId) {
                console.log("Successfully sent message with id %s to recipient %s",
                    messageId, recipientId);
            } else {
                console.log("Successfully called Send API for recipient %s",
                    recipientId);
            }
            if (callback) {
                console.log('Callback fbAPI is called');
                callback(null);
            }
        } else {
            if (callback) {
                callback(error);
            }
            console.error(response.error);
        }
    });
};