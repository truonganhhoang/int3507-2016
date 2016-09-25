'use strict';
const
    abResponse = require('../../abchatbot/getResponse');

module.exports = function sendTextMessage(recipientId, messageText) {
    abResponse(messageText, function (err, responseFromABBot) {
        if (err) {
            require('../../sendErrorMessage')(recipientId);
        }
        else {
            var messageData = {
                recipient: {
                    id: recipientId
                },
                message: {
                    text: responseFromABBot,
                    metadata: "DEVELOPER_DEFINED_METADATA"
                }
            };
            require('./callSendAPI')(messageData);
        }
    });
};