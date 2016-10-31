'use strict';

const
    sendFunctions = require('../facebook/sendFunctions'),
    request = require('request'),
    env = require('../env'),
    models = require('../../models');

module.exports = function (recipientId) {
    // Get user profile from facebook
    request({
        uri: 'https://graph.facebook.com/v2.6/' + recipientId,
        qs: {
            fields: 'first_name,last_name,profile_pic,locale,timezone,gender',
            access_token: env.PAGE_ACCESS_TOKEN
        },
        method: 'GET'
    }, function (err, response, body) {
        // Parse string to json object
        body = JSON.parse(body);

        models.UserProfile.findOneAndUpdate({
            facebookId: recipientId
        }, {
            firstName: body.first_name,
            lastName: body.last_name,
            picture: body.profile_pic,
            locale: body.locale,
            timezone: body.timezone,
            gender: body.gender
        }, {
            upsert: true
        }, function (err) {
            if (err) {
                console.log(err);
            }
        });
        sendFunctions.sendTextMessage(recipientId, `Hồ sơ cá nhân:\n`
            + `Tên: ${body.first_name} ${body.last_name}\n`
            + `Giới tính: ${body.gender == 'male' ? 'Nam' : 'Nữ'} \n`
            + `Múi giờ: GTM+${body.timezone}`);
    });
};