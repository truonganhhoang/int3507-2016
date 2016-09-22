'use strict';
const
    env = require('../../env');

module.exports = function sendAudioMessage(recipientId) {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            attachment: {
                type: "audio",
                payload: {
                    url: env.SERVER_URL + "/assets/sample.mp3"
                }
            }
        }
    };

    require('./callSendAPI')(messageData);
};