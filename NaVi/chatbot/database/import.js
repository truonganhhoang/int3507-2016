const
    mongoose = require('mongoose'),
    csv = require('fast-csv'),
    models = require('../models'),
    Question = models.Question;

csv.fromPath('database/raw/multipleChoices.csv').on('data', function (data) {
    console.log('Start importing. Please wait...');
    Question.findOne({
        question: data[0]
    }, function (err, result) {
        if (result === null) {
            Question.create({
                question: data[0],
                level: data[1],
                choices: [
                    {
                        text: data[2],
                        isAnswer: data[5] == 'A'
                    },
                    {
                        text: data[3],
                        isAnswer: data[5] == 'B'
                    },
                    {
                        text: data[4],
                        isAnswer: data[5] == 'C'
                    }
                ]
            }, function (err, res) {
                console.log(res);
            });
        }
    });
}).on('end', function () {
    console.log('Data successfully imported');
    process.exit(0);
});
