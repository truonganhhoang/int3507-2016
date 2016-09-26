'use strict';
const
    env = require('../../env');

module.exports = function sendImageMessage(recipientId) {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            attachment: {
                type: "image",
                payload: {
                    url: env.SERVER_URL + "/assets/rift.png"
                }
            }
        }
    };

    require('./callSendAPI')(messageData);
};