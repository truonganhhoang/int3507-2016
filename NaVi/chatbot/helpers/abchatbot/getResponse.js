'use strict';
const
    config = require('config'),
    request = require('request');

module.exports = function (message, callback) {
    request({
        uri: config.get('abServiceURL'),
        qs: {
            text: message
        },
        method: 'GET'
    }, function (err, response, body) {
        if (err || response.statusCode !== 200) {
            throw new EventException("ABCHATBOT_SERVICE_ERROR");
        }
        callback(JSON.parse(body).botResponse);
    });
};