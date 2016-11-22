'use strict';
const
    models = require('../../models'),
    sendFunctions = require('../facebook/sendFunctions');

module.exports = function (recipientId, payload) {
    let status = payload.split('_')[1];

	if (status === "NEXT") {
		// send another word
		require('../fnNewWords/sendNewWord')(recipientId);
	}
	else if (status === "REMOVE") {
		// remove sent word
		let wordId = payload.split('_')[2];  // new word's id

		models.UnlearnedWordUser.update({
			facebookId: recipientId 
		}, {
			$pull: {
				unlearnedWords: {
					wordId: wordId
				}
			}
		}).exec(function (err) {
			if (err) {
				console.log(err);
			}
			else {
				sendFunctions.sendTextMessage(recipientId, 'Bạn sẽ không thấy từ này nữa.');
			}
		});
	}
};