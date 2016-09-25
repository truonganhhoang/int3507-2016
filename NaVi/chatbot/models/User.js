'use strict';
const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var User = new Schema({
    _id: {
        type: String,
        require: true,
        unique: true
    }
}, {
    timestamps: false,
    versionKey: false
});

module.exports = mongoose.model('User', User);