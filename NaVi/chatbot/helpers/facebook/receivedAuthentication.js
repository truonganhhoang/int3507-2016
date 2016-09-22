'use strict';
const
    sendFunctions = require('./sendFunctions');

module.exports = function receivedAuthentication(event) {
    var senderID = event.sender.id;
    var recipientID = event.recipient.id;
    var timeOfAuth = event.timestamp;

    var passThroughParam = event.optin.ref;

    console.log("Received authentication for user %d and page %d with pass " +
        "through param '%s' at %d", senderID, recipientID, passThroughParam,
        timeOfAuth);

    sendFunctions.sendTextMessage(senderID, "Authentication successful");
};