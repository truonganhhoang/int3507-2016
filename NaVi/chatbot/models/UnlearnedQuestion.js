'use strict';
const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UnlearnedQuestion = new Schema({
    userId: {
        type: String,
        ref: 'User',
        unique: true
    },
    questionIds: [{
        _id: false,
        questionId: {
            type: Schema.Types.ObjectId,
            ref: 'Question'
        }
    }]
}, {
    timestamps: false,
    versionKey: false
});

module.exports = mongoose.model('UnlearnedQuestion', UnlearnedQuestion);