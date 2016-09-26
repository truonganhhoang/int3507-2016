'use strict';

module.exports = function (recipientId) {
    let defaultConfusionMessage = "Xin lỗi, mình chưa hiểu ý bạn lắm!";

    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            text: defaultConfusionMessage,
            metadata: "DEVELOPER_DEFINED_METADATA"
        }
    };

    require('./facebook/sendFunctions/callSendAPI')(messageData);
};