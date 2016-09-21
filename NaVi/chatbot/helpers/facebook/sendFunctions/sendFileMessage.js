const env = require('../../env');

module.exports = function sendFileMessage(recipientId) {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            attachment: {
                type: "file",
                payload: {
                    url: env.SERVER_URL + "/assets/test.txt"
                }
            }
        }
    };

    require('./callSendAPI')(messageData);
};