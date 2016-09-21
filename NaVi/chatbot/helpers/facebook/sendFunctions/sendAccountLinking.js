const env = require('../../env');

module.exports = function sendAccountLinking(recipientId) {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            attachment: {
                type: "template",
                payload: {
                    template_type: "button",
                    text: "Welcome. Link your account.",
                    buttons:[{
                        type: "account_link",
                        url: env.SERVER_URL + "/authorize"
                    }]
                }
            }
        }
    };

    require('./callSendAPI')(messageData);
};