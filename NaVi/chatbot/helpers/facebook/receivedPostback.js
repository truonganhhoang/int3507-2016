'use strict';

module.exports = function receivedPostback(event) {
    var senderID = event.sender.id;
    var recipientID = event.recipient.id;
    var timeOfPostback = event.timestamp;

    // The 'payload' param is a developer-defined field which is set in a postback
    // button for Structured Messages.
    var payload = event.postback.payload;

    if (payload) {
        let action = payload.split('_')[0];

        // If action is 'New word'
        if (action === "NW") {
            require('../fnNewWords/handlePostbackAction')(senderID, payload);
        }
        else if (action === "PM") {
            let chosenOption = payload.split('_')[1];
            if (chosenOption === "PROFILE") {
                require('../fnUserSettings/updateProfile')(senderID);
            }
            else if (chosenOption === "STATUS") {
                require('../fnUserSettings/learningProgress')(senderID);
            }
            else if (chosenOption === "NOTIFICATIONS") {

            }
        }
    }
};