'use strict';
const
    redis = require('redis'),
    client = redis.createClient();

// Connect to Redis server
// Before this, Redis server must be already installed on your OS
// Then run redis-server to start Redis server
client.on('error', function (err) {
    console.log('Error while establishing connection to Redis: ', err);
});
client.on('ready', function () {
    console.log('Connected to Redis server.');
});

module.exports = client;