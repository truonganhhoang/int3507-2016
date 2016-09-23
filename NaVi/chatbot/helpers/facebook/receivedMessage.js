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
            let status = payload.split('_')[1];
            // If action is 'Multiple choices'
            if (action === 'MC') {
                if (status === 'TRUE') {
                    sendFunctions.sendTextMessage(senderID, 'Congrats. You\'re right!');
                    // gui them 1 cau hoi
                    return;
                }
                else if (status === 'FALSE') {
                    sendFunctions.sendTextMessage(senderID, 'Oh oh. It\'s not the right answer.');
                    // dua dap an + cau khac
                    return;
                }
                else if (messageText === 'stop') {
                    sendFunctions.sendTextMessage(senderID, 'Okay. Multiple choices question stopped.');
                    return;
                }
                else {
                    console.log(payload);
                }
            }
        }
        else {
            console.log('Pay load is null');
        }
    }
    if (isEcho) {
        // Just logging message echoes to console
        console.log("Received echo for message %s and app %d with metadata %s", messageId, appId, metadata);
        return;
    } else if (quickReply) {
        // var quickReplyPayload = quickReply.payload;
        // console.log("Quick reply for message %s with payload %s", messageId, quickReplyPayload);

        sendFunctions.sendTextMessage(senderID, "Quick reply tapped");
        return;
    }

    if (messageText) {
        switch (messageText) {
            case 'multiple choices':
                require('../fnMutipleChoices/sendQuestion')(senderID);
                break;

            case 'image':
                sendFunctions.sendImageMessage(senderID);
                break;

            case 'gif':
                sendFunctions.sendGifMessage(senderID);
                break;

            case 'audio':
                sendFunctions.sendAudioMessage(senderID);
                break;

            case 'video':
                sendFunctions.sendVideoMessage(senderID);
                break;

            case 'file':
                sendFunctions.sendFileMessage(senderID);
                break;

            case 'button':
                sendFunctions.sendButtonMessage(senderID);
                break;

            case 'generic':
                sendFunctions.sendGenericMessage(senderID);
                break;

            case 'receipt':
                sendFunctions.sendReceiptMessage(senderID);
                break;

            case 'quick reply':
                sendFunctions.sendQuickReply(senderID);
                break;

            case 'read receipt':
                sendFunctions.sendReadReceipt(senderID);
                break;

            case 'typing on':
                sendFunctions.sendTypingOn(senderID);
                break;

            case 'typing off':
                sendFunctions.sendTypingOff(senderID);
                break;

            case 'account linking':
                sendFunctions.sendAccountLinking(senderID);
                break;

            default:
                sendFunctions.sendTextMessage(senderID, messageText);
        }
    }
    else if (messageAttachments) {
        sendFunctions.sendTextMessage(senderID, "Message with attachment received");
    }
};