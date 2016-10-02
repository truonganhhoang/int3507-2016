'use strict';
const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UnlearnedWordUser = new Schema({
    facebookId: {
        type: String,
        require: true,
        unique: true
    },
    unlearnedWords: [{
        _id: false,
        wordId: {
            type: Schema.Types.ObjectId,
            ref: 'NewWord'
        }
    }]
}, {
    timestamps: false,
    versionKey: false
});

module.exports = mongoose.model('UnlearnedWordUser', UnlearnedWordUser);