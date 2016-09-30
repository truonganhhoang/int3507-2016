'use strict';
const
    csv = require('fast-csv'),
    seeder = require('mongoose-seed'),
    config = require('config'),
    mongoose = require('mongoose'),
    Question = require('../models').Question,
    NewWord = require('../models').NewWord;

const delayTimeToImportData = 5000;
var questions = [];
var newWords = [];
mongoose.Promise = global.Promise;

seeder.connect(config.get('mongodbURL'), function () {
    console.log('Connected to mongodb');
    seeder.loadModels([
        'models/Question.js',
        'models/UnlearnedQuestionUser.js',
        'models/NewWord.js',
        'models/UnlearnedWordUser.js'
    ]);
    seeder.clearModels([
        'Question',
        'UnlearnedQuestionUser',
        'NewWord',
        'UnlearnedWordUser'
    ], function () {
        let MCQuestionFile = 'database/raw/mc_v2_database.csv';
        let WordFile = 'database/raw/words.csv';

        console.log(`Start importing... Please wait ${delayTimeToImportData/1000} seconds`);

        // import multiple choices question
        csv.fromPath(MCQuestionFile, { delimiter: ';'}).on('data', function (data) {
            questions.push(data);
        }).on('finish', function () {
            try {
                importQuestion(questions, function (numberOfImportedQuestions) {
                    setTimeout(function () {
                        console.log(`Finish importing: ${numberOfImportedQuestions} questions.`);
                        process.exit(0);
                    }, delayTimeToImportData);
                });
            }
            catch (err) {
                console.log('Error occurs: ', err.message);
            }
        });

        // import new words
        csv.fromPath(WordFile, { delimiter: '|'}).on('data', function (data) {
            newWords.push(data);
        }).on('finish', function () {
            try {
                importNewWord(newWords, function (numberOfImportedWords) {
                    setTimeout(function () {
                        console.log(`Finish importing: ${numberOfImportedWords} new words.`);
                        process.exit(0);
                    }, delayTimeToImportData);
                });
            }
            catch (err) {
                console.log('Error occurs: ', err.message);
            }
        });
    });
});

var importQuestion = function (questions, callback) {
    for (let i = 0; i < questions.length; i++) {
        Question.findOne({
            question: questions[i][0]
        }, function (err, result) {
            if (err) {
                throw new Error('ERROR_FINDING_QUESTION');
            }
            else if (result === null) {
                let qs = new Question({
                    question: questions[i][0],
                    level: questions[i][1],
                    choices: [
                        {
                            text: questions[i][2],
                            isAnswer: questions[i][5] == 'A'
                        },
                        {
                            text: questions[i][3],
                            isAnswer: questions[i][5] == 'B'
                        },
                        {
                            text: questions[i][4],
                            isAnswer: questions[i][5] == 'C'
                        }
                    ]
                });
                qs.save().then(function (savedQs) {
                    // console.log(savedQs);
                });
            }
        });
    }
    callback(questions.length);
};

var importNewWord = function (newWords, callback) {
    for (let i = 0; i < newWords.length; i++) {
        NewWord.findOne({
            word: newWords[i][0]
        }, function (err, result) {
            if (err) {
                throw new Error('ERROR_FINDING_NEW_WORD');
            }
            else if (result === null) {
                let word = new NewWord({
                    word: newWords[i][0],
                    type: newWords[i][1],
                    pronunciation: newWords[i][2],
                    meaning: newWords[i][3]
                });
                word.save();
            }
        });
    }
    callback(newWords.length);
};