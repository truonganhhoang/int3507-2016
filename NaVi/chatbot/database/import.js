'use strict';
const
    csv = require('fast-csv'),
    seeder = require('mongoose-seed'),
    config = require('config'),
    mongoose = require('mongoose'),
    models = require('../models'),
    Question = models.Question;

const delayTimeToImportData = 5000;
var questions = [];
mongoose.Promise = global.Promise;

seeder.connect(config.get('mongodbURL'), function () {
    console.log('Connected to mongodb');
    seeder.loadModels([
        'models/Question.js',
        'models/User.js'
    ]);
    seeder.clearModels([
        'Question',
        'User'
    ], function () {
        console.log(`Start importing... Please wait ${delayTimeToImportData/1000} seconds`);
        csv.fromPath('database/raw/multipleChoices.csv').on('data', function (data) {
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