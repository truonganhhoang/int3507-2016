'use strict';
const
    config = require('config'),
    request = require('request');

module.exports = function (message, callback) {
    request({
        uri: config.get('intentClassificationServiceURL'),
        qs: {
            text: message
        },
        method: 'GET'
    }, function (err, response, body) {
        if (err || response.statusCode !== 200) {
            callback(err);
        }
        else {
            callback(null, JSON.parse(body));
        }
    });
};