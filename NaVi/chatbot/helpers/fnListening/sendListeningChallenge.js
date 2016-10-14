'use strict';

const
    env = require('../env'),
    Audio = require('../../models').Audio,
    sendFunctions = require('../facebook/sendFunctions'),
    redisClient = require('../../caching/redisClient');

module.exports = function (recipientId) {
    Audio.count().exec(function (err, numberOfAudios) {
        let randomName = Math.floor(Math.random() * numberOfAudios + 1) + '.mp3';
        Audio.findOne({
            name: randomName
        }, function (err, audio) {
            if (err) {
                require('../sendErrorMessage')(recipientId);
            }
            else if (!audio) {
                require('../sendErrorMessage')(recipientId, "Xin lỗi bạn. Số lượng audio hiện tại là rỗng."
                    + " Bạn thử lại sau nhé!");
            }
            else {
                let textIntroMessage = "Dưới đây là bài nghe của bạn. Bạn có thể nghe lại nhiều lần,"
                    + " nhập những gì bạn nghe được thành một đoạn và nhấn \"Gửi\" để kiểm tra kết quả.";
                sendFunctions.sendTextMessage(recipientId, textIntroMessage, function () {
                    let messageData = {
                        recipient: {
                            id: recipientId
                        },
                        message: {
                            attachment: {
                                type: "audio",
                                payload: {
                                    url: env.SERVER_URL + '/audios/' + audio.name
                                }
                            }
                        }
                    };

                    sendFunctions.callSendAPI(messageData);

                    // save "LI" context to redis
                    redisClient.hmset(recipientId, ['context', 'LI', 'lastListeningText', audio.text.toString()]);
                });
            }
        });
    });
};