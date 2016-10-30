'use strict';
const
    sendFunctions = require('./sendFunctions'),
    redisClient = require('../../caching/redisClient'),
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
            // If there is a MC answer suggestion
            else if (action === 'MCSUGGESTION') {
                require('../fnMutipleChoices/handleSuggestionQuickReply')(senderID, payload, event);
            }
            else if (action === 'LINEXT') {
                require('../fnListening/sendListeningChallenge')(senderID);
            }
            else if (action === 'PM') {
                require('../fnUserSettings/handleNotificationSettingQuickReplyAction')(senderID, payload);
            }
        }
    }

    else if (messageText) {
        redisClient.hgetall(senderID, function (err, reply) {
            if (err) {
                console.log(err);
            }
            else if (reply && reply.context === 'MC') {
                require('../fnMutipleChoices/handleTextReplyAction')(senderID, messageText, event);
            }
            else if (reply && reply.context === 'LI') {
                require('../fnListening/handleTextReplyAction')(senderID, messageText, event);
            }
            else {
                // hard code the command to enter fnPronunciation
                let
                    pronunciationIntentFlag = 0,
                    pronunciationIntentSignals = [
                        'speak', 'say', 'pronounce',
                        'đọc', 'nói', 'phát âm',
                        'doc', 'noi', 'phat am'
                    ];
                for (let i = 0; i < pronunciationIntentSignals.length; i++) {
                    if (messageText.toLowerCase().indexOf(pronunciationIntentSignals[i]) != -1) {
                        pronunciationIntentFlag = pronunciationIntentSignals[i].length;
                        break;
                    }
                }
                if (pronunciationIntentFlag != 0) {
                    var speechContent = messageText.substring(pronunciationIntentFlag + 1, messageText.length);
                    require('../fnPronunciation/sendAudio')(senderID, speechContent);
                }
                // End of fnPronunciation
                else {
                    require('../intentClassification/getIntentClassification')(messageText, function (err, response) {
                        // Save the new context to redis
                        if (!err && response && response.intentClass) {
                            redisClient.hmset(senderID, ["context", response.intentClass], function (err, res) {
                                if (err) {
                                    console.log("Redis error: ", err);
                                }
                                else {
                                    console.log(res);
                                }
                            });
                        }

                        if (err) {
                            require('../sendErrorMessage')(senderID);
                        }
                        else if (response && response.intentClass === 'MC') {
                            require('../fnMutipleChoices/sendQuestion')(senderID);
                        }
                        else if (response && response.intentClass === 'NW') {
                            require('../fnNewWords/sendNewWord')(senderID);
                        }
                        else if (response && response.intentClass === 'LI') {
                            require('../fnListening/sendListeningChallenge')(senderID);
                        }
                        else if (response && response.intentClass === 'CO') {
                            require('../fnConversations/sendNormalMessage')(senderID, response.botResponse);
                        }
                        else {
                            require('./sendFunctions/sendTextMessage')(senderID, response.intentClass, function (err) {
                                console.log("Message sent!");
                            });
                        }
                    });
                }
            }
        });
    }
    else if (messageAttachments) {
        sendFunctions.sendTextMessage(senderID, "Mình đã nhận được tệp đính kèm :)");
    }
};