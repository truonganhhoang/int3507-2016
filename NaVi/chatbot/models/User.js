'use strict';
const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var User = new Schema({
    userId: {
        type: String,
        require: true,
        unique: true
    }
}, {
    timestamps: false,
    versionKey: false
});

module.exports = mongoose.model('User', User);