'use strict';
const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Question = new Schema({
    question: {
        type: String,
        require: true
    },
    level: {
        type: Number,
        require: true
    },
    choices: [{
        _id: false,
        text: {
            type: String
        },
        isAnswer: Boolean
    }]
}, {
    timestamps: false,
    versionKey: false
});

module.exports = mongoose.model('Question', Question);