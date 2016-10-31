'use strict';

module.exports = function (recipientId, botResponse) {
    if (botResponse == 'ABBOT_CONFUSION') {
        require('../sendConfusionMessage')(recipientId);
    }
    else {
        require('../facebook/sendFunctions/sendTextMessage')(recipientId, botResponse, function (err) {
            console.log("Message sent!");
        });
    }
};