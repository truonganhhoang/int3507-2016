'use strict';
const
    models = require('../../models');

module.exports = function (recipientId, payload) {
    let status = payload.split('_')[1];

	if (status === "NEXT") {
		// send another word
		require('../fnNewWords/sendNewWord')(recipientId);
	}
};