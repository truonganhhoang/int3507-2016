'use strict';

const
    models = require('../../models');

module.exports = function (recipientId, payload) {
    var timeToNotify = payload.split('_')[2];
    console.log(timeToNotify, typeof timeToNotify);
    if (timeToNotify !== '9' && timeToNotify !== '20') {
        timeToNotify = 'OFF';
    }
    console.log(timeToNotify);
    models.UserNotification.findOneAndUpdate({
        facebookId: recipientId
    }, {
        timeToNotify: timeToNotify
    }, {
        upsert: true
    }, function (err) {
        if (err) {
            console.log(err);
        } else {
            var notificationStatus = '';
            if (timeToNotify === '9') {
                notificationStatus = 'Đã bật thông báo: 9h00 hàng ngày';
            } else if (timeToNotify === '20') {
                notificationStatus = 'Đã bật thông báo: 20h00 hàng ngày';
            }
            else {
                notificationStatus = 'Đã tắt thông báo';
            }
            require('../facebook/sendFunctions/sendTextMessage')(recipientId, notificationStatus);
        }
    });
};