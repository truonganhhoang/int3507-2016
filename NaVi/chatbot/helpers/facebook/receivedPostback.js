'use strict';
const
    sendFunctions = require('./sendFunctions');

module.exports = function receivedPostback(event) {
    var senderID = event.sender.id;
    var recipientID = event.recipient.id;
    var timeOfPostback = event.timestamp;

    // The 'payload' param is a developer-defined field which is set in a postback
    // button for Structured Messages.
    var payload = event.postback.payload;

    console.log("Received postback for user %d and page %d with payload '%s' " +
    "at %d", senderID, recipientID, payload, timeOfPostback);

    if (payload) {
        let action = payload.split('_')[0];

        // If action is 'New word'
        if (action === "NW") {
            require('../fnNewWords/handlePostbackAction')(senderID, payload);
        }
    }
};