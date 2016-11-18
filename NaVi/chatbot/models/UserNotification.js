'use strict';
const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserNotification = new Schema({
    facebookId: {
        type: String,
        require: true,
        unique: true
    },
    timeToNotify: {
        type: String
    }
}, {
    timestamps: false,
    versionKey: false
});

module.exports = mongoose.model('UserNotification', UserNotification);