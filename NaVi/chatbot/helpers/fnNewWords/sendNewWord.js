'use strict';
const
    request = require('request'),
    models = require('../../models');


module.exports = function (recipientId) {
    models.UnlearnedWordUser.findOne({
        facebookId: recipientId
    }, function (err, user) {
        if (!user) {
            console.log('UnlearnedWordUser does not exist yet!');
            createNewUserWithNewWords(recipientId);
        }
        else {
            if (user.unlearnedWords.length == 0) {
                let allWordLearnedMessage = 'Bạn đã học hết tất cả các từ mới rồi. Đợi chúng mình cập nhật thêm nhé!';
                require('../sendErrorMessage')(recipientId, allWordLearnedMessage);
            }
            else {
                getOneWord(user.unlearnedWords, recipientId);
            }
        }
    });
};

function createNewUserWithNewWords(recipientId) {
    models.NewWord.find({}, function(err, newWords) {
        if (newWords) {
            var ids = [];
            for (var i=0; i < newWords.length; i++) {
                ids.push({wordId: newWords[i]._id});
            }
            console.log("Creating new words set for new user.");
            models.UnlearnedWordUser.create({
                facebookId: recipientId,
                unlearnedWords: ids
            }, function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    getOneWord(ids, recipientId);
                }
            });
        }
    });
}

function getOneWord(unlearnedWords, recipientId) {
    if (unlearnedWords.length == 0) {
        let errorText = "Xin lỗi. Mình chưa thể tìm thấy từ mới nào cho bạn.";
        require('../sendErrorMessage')(recipientId, errorText);
    } else {
        // get a random word in unlearned word set
        var idx = Math.floor(Math.random() * unlearnedWords.length);
        var word = unlearnedWords[idx];
        models.NewWord.findOne({
            _id: word.wordId
        }, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                // append word's id to remove button to know which word the user want to remove later
                var messageData = {
                    recipient: {
                        id: recipientId
                    },
                    message: {
                        attachment: {
                            type: "template",
                            payload: {
                                template_type: "generic",
                                elements: [{
                                    title: result.word + ' ' + result.type + ': ' + result.meaning,
                                    subtitle: result.pronunciation,
                                    buttons: [{
                                        type: "postback",
                                        title: "Từ khác",
                                        payload: "NW_NEXT"
                                    },
                                    {
                                        type: "postback",
                                        title: "Không hiện lại",
                                        payload: "NW_REMOVE_" + result._id
                                    }]
                                }]
                            }
                        }
                    }
                };
                require('../facebook/sendFunctions/callSendAPI')(messageData);
            }
        });
    }
}