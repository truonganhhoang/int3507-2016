'use strict';

const
    env = require('../env'),
    sendFunctions = require('../facebook/sendFunctions'),
    fs = require('fs'),
    Ivona = require('ivona-node');

module.exports = function (recipientId, speechContent) {

    var ivona = new Ivona({
        accessKey: 'GDNAJHJ3VJRLQJWJZNSQ',
        secretKey: 'QIAmMfthsjqr6Dz7/97Os3i7/pCkhihHBn0XJy5p'
    });

    // each user has 1 speech file which is the latest text to speech request
    // use recipientId as the name of the file (1-1 relationship)
    var writeStream = fs.createWriteStream(process.cwd() + '/public/audios/userSpeeches/' + recipientId + '.mp3');

    writeStream.on('finish', function() {
        let messageData = {
            recipient: {
                id: recipientId
            },
            message: {
                attachment: {
                    type: "audio",
                    payload: {
                        url: env.SERVER_URL + '/audios/userSpeeches/' + recipientId + '.mp3'
                    }
                }
            }
        };

        sendFunctions.callSendAPI(messageData);
    });

    ivona.createVoice(speechContent, {
        body: {
            voice: {
                name: 'Salli',
                language: 'en-US',
                gender: 'Female'
            }
        }
    }).pipe(writeStream);
};
