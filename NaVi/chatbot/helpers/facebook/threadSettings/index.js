'use strict';

const
    setPersistentMenu = require('./setPersistentMenu');

let persistentMenuItems = [
    {
        "type":"postback",
        "title":"Hồ sơ cá nhân",
        "payload":"PM_PROFILE"
    },
    {
        "type":"postback",
        "title":"Tiến trình học tập",
        "payload":"PM_STATUS"
    },
    {
        "type":"postback",
        "title":"Thông báo",
        "payload":"PM_NOTIFICATIONS"
    }
];

setPersistentMenu(persistentMenuItems, function (err) {
   if (err) {
       console.log(err);
   }
   else {
       console.log('Persistent menu turned on.');
   }
});
