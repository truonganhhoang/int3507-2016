'use strict';
const
    sendFunctions = require('./sendFunctions'),
    models = require('../../models');

module.exports = function receivedMessage(event) {
    var senderID = event.sender.id;
    var recipientID = event.recipient.id;
    var timeOfMessage = event.timestamp;
    var message = event.message;

    console.log("Received message for user %d and page %d at %d with message:",
        senderID, recipientID, timeOfMessage);
    console.log(JSON.stringify(message));

    var isEcho = message.is_echo;
    var messageId = message.mid;
    var appId = message.app_id;
    var metadata = message.metadata;

    // You may get a text or attachment but not both
    var messageText = message.text;
    var messageAttachments = message.attachments;
    var quickReply = message.quick_reply;

    // Can not use metadata === 'MULTIPLE_CHOICES' here?
    // if (quickReply && metadata === 'MULTIPLE_CHOICES') {
    if (quickReply) {
        let payload = quickReply.payload;
        if (payload) {
            let action = payload.split('_')[0];

            // If action is 'Multiple choices'
            if (action === 'MC') {
                require('../fnMutipleChoices/handleQuickReplyAction')(senderID, payload);
            }
        }
    }

    else if (messageText) {
        require('../intentClassification/getIntentClassification')(messageText, function (err, response) {
            if (err) {
                require('../sendErrorMessage')(senderID);
            }
            else if (response && response.intentClass === 'MP') {
                require('../fnMutipleChoices/sendQuestion')(senderID);
            }
            else if (response && response.intentClass === 'NW') {
                require('../fnNewwords/sendNewword')(senderID);
            }
            else if (response && response.intentClass === 'LI') {
                require('../fnListening/sendListeningChallenge')(senderID);
            }
            else if (response && response.intentClass === 'CO') {
                require('../fnConversations/sendNormalMessage')(senderID, response.botResponse);
            }
            else {
                console.log(response);
                require('./sendFunctions/sendTextMessage')(senderID, response.intentClass, function (err) {
                    console.log("Message sent!");
                });
            }
        });
    }
    else if (messageAttachments) {
        sendFunctions.sendTextMessage(senderID, "Message with attachment received");
    }
};