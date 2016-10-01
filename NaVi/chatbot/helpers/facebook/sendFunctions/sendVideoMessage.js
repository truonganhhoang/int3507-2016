'use strict';
const
    env = require('../../env');

module.exports = function sendVideoMessage(recipientId) {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            attachment: {
                type: "video",
                payload: {
                    url: env.SERVER_URL + "/assets/allofus480.mov"
                }
            }
        }
    };

    require('./callSendAPI')(messageData);
};