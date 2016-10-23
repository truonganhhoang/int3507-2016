'use strict';
const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserProfile = new Schema({
    facebookId: {
        type: String,
        require: true,
        unique: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    picture: {
        type: String
    },
    locale: {
        type: String
    },
    timezone: {
        type: Number
    },
    gender: {
        type: String
    }
}, {
    timestamps: false,
    versionKey: false
});

module.exports = mongoose.model('UserProfile', UserProfile);