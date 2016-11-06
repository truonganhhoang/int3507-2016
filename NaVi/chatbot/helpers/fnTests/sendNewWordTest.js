'use strict';

const
    env = require('../env'),
    NewWord = require('../../models').NewWord,
    UnlearnedWordUser = require('../../models').UnlearnedWordUser,
    sendFunctions = require('../facebook/sendFunctions'),
    redisClient = require('../../caching/redisClient'),
    MAX_NUM_OF_TEST_WORDS = 5;

module.exports = function (recipientId) {
    UnlearnedWordUser.findOne({
        facebookId: recipientId
    }, function(err, user) {
        if (!user) {
            console.log('UnlearnedQuestionUser does not exist yet!');
            createNewUserWithQuestions(recipientId);
            // tell user to learn some new words first
            var learnFirst = 'Bạn chưa học từ mới nào. Ôn tập trước đã nhé!';
            require('../sendErrorMessage')(recipientId, learnFirst);
        }
        else {
            // get all unlearned words of user
            var temp = user.unlearnedWords;
            var unlearnedWords = [];
            for (var i = 0; i < temp.length; i++) {
                unlearnedWords[i] = temp[i].wordId
            }

            // get all words that are not in unlearned words
            NewWord.find({
                "_id": {"$nin": unlearnedWords}
            }, function(err, words) {
                if (words.length == 0) {
                    var learnFirst = 'Bạn chưa học từ mới nào. Ôn tập trước đã nhé!';
                    require('../sendErrorMessage')(recipientId, learnFirst);
                }
                else {
                    // find number of new words to send to users
                    var numOfWords = Math.min(MAX_NUM_OF_TEST_WORDS, words.length);

                    // get "numOfWords" random words from "words"
                    var ranWords = [];
                    for (var i=0; i < numOfWords; i++) {
                        var rand_i = Math.floor(Math.random() * words.length);
                        ranWords[i] = words[rand_i];
                        words.splice(rand_i, 1);
                    }

                    // send test
                    var test = "";
                    for (var i=0; i < ranWords.length; i++) {
                        test += (i+1) + ". " + ranWords[i].meaning;
                        if (i < ranWords.length - 1) {
                            test += "\n";
                        }
                    }

                    var message = "Dưới đây là danh sách nghĩa của " + ranWords.length + " từ:\n"
                                + test
                                + "\nNhững từ đó là gì? (Viết lần lượt các đáp án và cách nhau bởi dấu ',')";

                    sendFunctions.sendTextMessage(recipientId, message);

                    var answer = "";
                    for (var i=0; i < ranWords.length - 1; i++) {
                        answer += ranWords[i].word.toLowerCase() + ",";
                    }
                    answer += ranWords[ranWords.length - 1].word.toLowerCase();

                    // save context to redis
                    redisClient.hmset(recipientId, ['context', 'TW', 'test', test, 'answer', answer]);
                }
            });
        }
    });
};