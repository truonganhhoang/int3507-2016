'use strict';

module.exports = function (recipientId, errorMessage) {
    let defaultErrorMessage = "Xin lỗi, mình vừa gặp chút trục trặc. Bạn thử lại sau nhé!";

    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            text: defaultErrorMessage,
            metadata: "DEVELOPER_DEFINED_METADATA"
        }
    };
    if (errorMessage) {
        messageData.message.text = errorMessage;
    }

    require('./facebook/sendFunctions/callSendAPI')(messageData);
};