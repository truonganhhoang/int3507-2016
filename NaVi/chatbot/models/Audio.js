'use strict';
const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Audio = new Schema({
    name: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    }
}, {
    timestamps: false,
    versionKey: false
});

module.exports = mongoose.model('Audio', Audio);