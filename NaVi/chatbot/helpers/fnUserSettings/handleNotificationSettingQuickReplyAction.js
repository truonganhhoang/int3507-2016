'use strict';

const
    models = require('../../models'),
    schedule = require('node-schedule');

module.exports = function (recipientId, payload) {
    var timeToNotify = payload.split('_')[2];
    if (timeToNotify !== '9' && timeToNotify !== '20') {
        timeToNotify = 'OFF';
    }

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

            // Cancel previous notification setting
            var previousNotificationSetting = schedule.scheduledJobs[recipientId];
            if (previousNotificationSetting) {
                previousNotificationSetting.cancel();
            }
            // Schedule new notification appropriate to specific user if the notification is turned on
            if (timeToNotify !== 'OFF') {
                var systemTimezoneOffset = new Date().getTimezoneOffset();
                var systemTimezone = -systemTimezoneOffset/60;
                models.UserProfile.findOne({
                    facebookId: recipientId
                }, 'timezone', function (err, user) {
                    if (err) {
                        console.log(err);
                    } else {
                        // If the user profile is not updated yet, we set the user's timezone equal to the system timezone
                        if (!user) {
                            user = {};
                            user.timezone = systemTimezone;
                        }
                        var timezoneDifference = user.timezone - systemTimezone;
                        var rule = new schedule.RecurrenceRule();

                        rule.dayOfWeek = [0, new schedule.Range(0, 6)];
                        rule.hour = Math.abs(parseInt(timeToNotify) - timezoneDifference)%24;
                        rule.minute = 0;
                        var j = schedule.scheduleJob(recipientId, rule, function () {
                            var remindMessage = "Bạn ơi đến giờ học tiếng anh rồi kìa!";
                            var messageData = {
                                recipient: {
                                    id: recipientId
                                },
                                message: {
                                    text: remindMessage,
                                    quick_replies: [
                                        {
                                            "content_type":"text",
                                            "title": 'Học từ mới',
                                            "payload": "REMIND_START?NW"
                                        },
                                        {
                                            "content_type":"text",
                                            "title": 'Làm trắc nghiệm',
                                            "payload": "REMIND_START?MC"
                                        },
                                        {
                                            "content_type":"text",
                                            "title": 'Luyện nghe',
                                            "payload": "REMIND_START?LI"
                                        }
                                    ]
                                }
                            };
                            require('../facebook/sendFunctions/callSendAPI')(messageData);
                        });
                    }
                });
            }
        }
    });
};