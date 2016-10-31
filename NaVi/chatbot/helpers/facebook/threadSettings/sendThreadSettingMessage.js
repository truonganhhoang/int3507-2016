'use strict';
const
    request = require('request'),
    env = require('../../env');
    
module.exports = function (threadSettingsMessage, callback) {
    request({
        uri: 'https://graph.facebook.com/v2.6/me/thread_settings',
        qs: { access_token: env.PAGE_ACCESS_TOKEN },
        method: 'POST',
        json: threadSettingsMessage
    }, function (error, response, body) {
        console.log(body.result);
        if (!error && response.statusCode === 200) {
            if (callback) {
                callback(null);
            }
        }
        else {
            if (callback) {
                callback(error);
            }
        }
    });
};