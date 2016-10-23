'use strict';
const
    mongoose = require('mongoose'),
    config = require('config');

var mongooseConnect = function () {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.get('mongodbURL'), function () {
        console.log('Connected to mongodb.');
    });
};

module.exports  = {
	mongooseConnect: mongooseConnect,
    Question: require('./Question'),
    UnlearnedQuestionUser: require('./UnlearnedQuestionUser'),
    NewWord: require('./NewWord'),
    UnlearnedWordUser: require('./UnlearnedWordUser'),
    Audio: require('./Audio'),
    UserProfile: require('./UserProfile')
};