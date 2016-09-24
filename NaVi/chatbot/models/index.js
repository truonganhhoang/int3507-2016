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
    Question: require('./Question')
};