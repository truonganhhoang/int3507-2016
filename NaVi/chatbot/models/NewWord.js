'use strict';
const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NewWord = new Schema({
    word: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    pronunciation: {
        type: String,
        require: true
    },
    meaning: {
        type: String,
        require: true
    }
}, {
    timestamps: false,
    versionKey: false
});

module.exports = mongoose.model('NewWord', NewWord);