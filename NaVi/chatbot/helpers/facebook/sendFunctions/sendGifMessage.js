'use strict';
const
    env = require('../../env');

module.exports = function sendGifMessage(recipientId) {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            attachment: {
                type: "image",
                payload: {
                    url: env.SERVER_URL + "/assets/instagram_logo.gif"
                }
            }
        }
    };

    require('./callSendAPI')(messageData);
};