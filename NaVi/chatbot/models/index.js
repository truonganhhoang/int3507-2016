const
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chatbot');

module.exports  = {
    Question: require('./question')
};