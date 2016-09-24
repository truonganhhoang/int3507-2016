'use strict';
const
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chatbot');

module.exports  = {
    Question: require('./Question'),
    User: require('./User'),
    UnlearnedQuestion: require('./UnlearnedQuestion')
};