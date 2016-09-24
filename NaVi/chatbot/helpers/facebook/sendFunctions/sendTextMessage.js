'use strict';
const
    abResponse = require('../../abchatbot/getResponse');

module.exports = function sendTextMessage(recipientId, messageText) {
    try {
        abResponse(messageText, function (responseFromABBot) {
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
        });
    }
    catch (e) {
        require('../../sendConfusionMessage')(recipientId);
    }
};