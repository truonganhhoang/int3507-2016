'use strict';

module.exports = function (menuItems, callback) {
    const
        persistentMenuSettings = {
            setting_type: 'call_to_actions',
            thread_state: 'existing_thread',
            call_to_actions: menuItems
        };

    require('./sendThreadSettingMessage')(persistentMenuSettings, function (err) {
        if (err) {
            if (callback) {
                callback(err);
            }
        }
        else {
            if (callback) {
                callback(null);
            }
        }
    });
};
