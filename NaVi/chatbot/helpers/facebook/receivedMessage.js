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
            let qId = payload.split('_')[2];  // question's id
            let rightAnswer = payload.split('_')[3];

            // If action is 'Multiple choices'
            if (action === 'MC') {
                if (status === 'TRUE') {
                    models.User.update({
                        $pull: {
                            unlearnedQuestions: {
                                questionId: qId
                            }
                        }
                    }).exec(function (err) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            sendFunctions.sendTextMessage(senderID, 'Chính xác! Đang tải câu hỏi tiếp theo...', function () {
                                // send new question
                                require('../fnMutipleChoices/sendQuestion')(senderID);
                            });
                        }
                    });
                }
                else if (status === 'FALSE') {
                    // return the answer
                    sendFunctions.sendTextMessage(senderID, "Sai. Đáp án là: \"" + rightAnswer + "\". Đang tải câu hỏi tiếp theo...", function () {
                        // send new question
                        require('../fnMutipleChoices/sendQuestion')(senderID);
                    });
                    // send new question
                    // require('../fnMutipleChoices/sendQuestion')(senderID);
                }
            }
        }
    }

    else if (messageText) {
        switch (messageText) {
            case 'làm trắc nghiệm':
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
                require('../abchatbot/sendResponseMessageFromABBot')(senderID, messageText);
        }
    }
    else if (messageAttachments) {
        sendFunctions.sendTextMessage(senderID, "Message with attachment received");
    }
};