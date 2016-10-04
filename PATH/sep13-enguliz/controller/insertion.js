/**
 * Created by Thinking on 09/22/2016.
 */

var express = require('express');
var router = express.Router();
var db = require('../utils/mongo1970');
var Collect = require('../utils/collection');
var Category = require('../models/physical/Category');
var Resp = require('../models/logical/Resp');
var Unit = require('../models/physical/Unit');
var random = require('../utils/random');
var Question = require('../models/physical/Question');

router.get('', (req, res) => {
    res.redirect('insert/category');
});

router.get('/category', (req, res) => {
    var category = [];
    category.push(Category.init("Listening", "https://www.socialmediaexplorer.com/wp-content/uploads/2014/03/Listen.jpg"));
    category.push(Category.init("Speaking", "https://www.speakmoreclearly.com/wp-content/uploads/2016/03/iStock_000012499903Small-trans_543_300_c1.png"));
    category.push(Category.init("Reading", "https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/books-open-on-table.jpg?itok=i4wJDL9A"));
    category.push(Category.init("Writing", "http://www.chf.vu.lt/wp-content/uploads/2016/07/creative-writing.jpg"));
    category.push(Category.init("Grammar", "http://mrbrownslearningspace.com/wp-content/uploads/2014/05/grammar.jpg"));

    db.dropTable(Collect.category);

    db.insertMany(Collect.category, category, (result) => {
        console.log(JSON.stringify(result));
        res.redirect('unit');
    });

});

router.get('/unit', (req, res) => {

    db.dropTable(Collect.unit);

    db.dropTable(Collect.question);

    db.fetchAll(Collect.category, (result) => {
        var categories = result;
        Array.from(categories).forEach((x) => {
            if (x.categoryName === 'Listening') {
                var units = [];
                
                units.push(Unit.init('Unit 01: Greetings', 'Cách chào hỏi khi gặp người quen', 'https://data.tienganh123.com/images/avatar/unit1.jpg', 'Nghe audio sau đó chọn đáp án đúng cho câu hỏi sau:', random.int(1000), x._id, Date(), 600000));
                units.push(Unit.init('Unit 02: People', 'Appearance Description', 'https://data.tienganh123.com/images/avatar/unit2.jpg', '', random.int(1000), x._id, Date(), 600000));
                units.push(Unit.init('Unit 03: Clothes', 'Formal clothes in business and workplace', 'https://data.tienganh123.com/images/avatar/unit3.jpg', '', random.int(1000), x._id, Date(), 600000));
                units.push(Unit.init('Unit 04: Family', 'Gia đình theo quan hệ huyết thống.', 'https://data.tienganh123.com/images/avatar/unit4.jpg', '', random.int(1000), x._id, Date(), 600000));
                units.push(Unit.init('Unit 05: Weather', 'Các kiểu thời tiết thường gặp', 'https://data.tienganh123.com/images/avatar/unit5.jpg', '', random.int(1000), x._id, Date(), 600000));
                units.push(Unit.init('Unit 06: Jobs', 'Những nghề nghiệp thường gặp.', 'https://data.tienganh123.com/images/avatar/unit6.jpg', '', random.int(1000), x._id, Date(), 600000));
                units.push(Unit.init('Unit 07: Time', 'Các bạn cùng học cách đọc đồng hồ nhé.', 'https://data.tienganh123.com/images/avatar/unit7.jpg', '', random.int(1000), x._id, Date(), 600000));
                units.push(Unit.init('Unit 08: Dates', 'Trong phần này chúng ta sẽ học cách đọc ngày tháng nhé.', 'https://data.tienganh123.com/images/avatar/lntacb_unit8.jpg', '', random.int(1000), x._id, Date(), 600000));
                units.push(Unit.init('Unit 09: Movies', 'Trong phần này, chúng ta cùng nhau tìm hiểu về các thể loại phim nhé.', 'https://data.tienganh123.com/images/avatar/lntacb_unit9.jpg', '', random.int(1000), x._id, Date(), 600000));
                units.push(Unit.init('Unit 10: Sports', 'Trong bài này, chúng ta cùng tìm hiểu về các môn thể thao.', 'https://data.tienganh123.com/images/avatar/lntacb_unit10.jpg', '', random.int(1000), x._id, Date(), 600000));
                
                db.insertMany(Collect.unit, units, (results) => {

                    db.findOne(Collect.unit, {'unitTitle': 'Unit 01: Greetings'}, (result) => {
                        var questions = [];

                        var answers = [];
                        var answer = {};
                        answer.ansId = "A";
                        answer.ansContent = "is";
                        answers.push(answer);
                        answer = {};
                        answer.ansId = "B";
                        answer.ansContent = "are";
                        answers.push(answer);
                        answer = {};
                        answer.ansId = "C";
                        answer.ansContent = "in";
                        answers.push(answer);
                        questions.push(Question.init("How ... you ?", result._id, answers));

                        var answers = [];
                        var answer = {};
                        answer.ansId = "A";
                        answer.ansContent = "A hello song";
                        answers.push(answer);
                        answer = {};
                        answer.ansId = "B";
                        answer.ansContent = "A goodbye song";
                        answers.push(answer);
                        answer = {};
                        answer.ansId = "C";
                        answer.ansContent = "A greetings song";
                        answers.push(answer);
                        answer = {};
                        answer.ansId = "D";
                        answer.ansContent = "A good morning song";
                        answers.push(answer);
                        questions.push(Question.init("What is the most suitable name for the song?", result._id, answers));

                        var answers = [];
                        var answer = {};
                        answer.ansId = "A";
                        answer.ansContent = "A hello song";
                        answers.push(answer);
                        answer = {};
                        answer.ansId = "B";
                        answer.ansContent = "A goodbye song";
                        answers.push(answer);
                        answer = {};
                        answer.ansId = "C";
                        answer.ansContent = "A greetings song";
                        answers.push(answer);
                        answer = {};
                        answer.ansId = "D";
                        answer.ansContent = "A good morning song";
                        answers.push(answer);
                        questions.push(Question.init("What is the most suitable name for the song?", result._id, answers));

                        var answers = [];
                        var answer = {};
                        answer.ansId = "A";
                        answer.ansContent = "A hello song";
                        answers.push(answer);
                        answer = {};
                        answer.ansId = "B";
                        answer.ansContent = "A goodbye song";
                        answers.push(answer);
                        answer = {};
                        answer.ansId = "C";
                        answer.ansContent = "A greetings song";
                        answers.push(answer);
                        answer = {};
                        answer.ansId = "D";
                        answer.ansContent = "A good morning song";
                        answers.push(answer);
                        questions.push(Question.init("What is the most suitable name for the song?", result._id, answers));

                        var answers = [];
                        var answer = {};
                        answer.ansId = "A";
                        answer.ansContent = "A hello song";
                        answers.push(answer);
                        answer = {};
                        answer.ansId = "B";
                        answer.ansContent = "A goodbye song";
                        answers.push(answer);
                        answer = {};
                        answer.ansId = "C";
                        answer.ansContent = "A greetings song";
                        answers.push(answer);
                        answer = {};
                        answer.ansId = "D";
                        answer.ansContent = "A good morning song";
                        answers.push(answer);
                        questions.push(Question.init("What is the most suitable name for the song?", result._id, answers));

                        var answers = [];
                        var answer = {};
                        answer.ansId = "A";
                        answer.ansContent = "A hello song";
                        answers.push(answer);
                        answer = {};
                        answer.ansId = "B";
                        answer.ansContent = "A goodbye song";
                        answers.push(answer);
                        answer = {};
                        answer.ansId = "C";
                        answer.ansContent = "A greetings song";
                        answers.push(answer);
                        answer = {};
                        answer.ansId = "D";
                        answer.ansContent = "A good morning song";
                        answers.push(answer);
                        questions.push(Question.init("What is the most suitable name for the song?", result._id, answers));

                        db.insertMany(Collect.question, questions, (res) => {});

                    });


                });
            } else if (x.categoryName === 'Speaking') {
                var units = [];
                units.push(Unit.init('Speaking - Describe Picture 263', 'Speaking - Describe Picture 263', 'http://www.clipartbest.com/cliparts/aie/kxX/aiekxX9i4.png', '', random.int(1000), x._id, Date(), 600000));
                units.push(Unit.init('Speaking - Describe Picture 262', 'Speaking - Describe Picture 262', 'http://aboutworldlanguages.com/wp-content/uploads/2013/02/speaking2-685x317.jpg', '', random.int(1000), x._id, Date(), 600000));
                units.push(Unit.init('Speaking - Describe Picture 261', 'Speaking - Describe Picture 261', 'http://potential2success.com/wp-content/uploads/2013/09/High-Def-Speaking-Big-Picture11.jpg', '', random.int(1000), x._id, Date(), 600000));
                db.insertMany(Collect.unit, units, (result) => { });
            } else if (x.categoryName === 'Reading') {
                var units = [];
                units.push(Unit.init('Yoda - the cat with four ears', 'In Chicago, Illinois, couple Valerie and Ted Rock took the cat in two years ago after...', 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg', 'In Chicago, Illinois, couple Valerie and Ted Rock took the cat in two years ago after they visited a local bar, where a group of drinkers were handing the animal around and making fun of him. Since being adopted by the Rocks and after getting his picture posted on the Internet, the two-year-old cat immediately became famous. The Rocks have received calls from Good Morning America, Fox News and The Tyra Banks Show. His pictures are shown in many magazines. People are surprised at his extra pair of ears. Despite his strange appearance, Yoda - named after the pointy-eared Star Wars character - is a perfectly normal and attractive cat. His extra ears are thought to be the result of a genetic mutation. He likes being taken for a walk with his owners. But Yoda\'s owners are keeping a close watch on their much-loved pet.', random.int(1000), x._id, Date(), 600000));
                units.push(Unit.init('Salt coffee – Last Part', 'After 40 years, he passed away, left her a letter which said: “My dearest, please...', 'https://noidung.tienganh123.com/file/baihoc/reading/beginner/bai22/bai22.jpg', 'After 40 years, he passed away, and left her a letter which said: “My dearest, please forgive me, forgive my life\'s lie. This was the only lie I said to you - the salty coffee. Remember the first time we dated?I was so nervous at that time, actually I wanted some sugar, but I said salt, it was hard for me to change so I just went ahead. I never thought that would be the start of my biggest lie. I tried to tell you the truth many times in my life, but I was too afraid to, as I had promised never to lie to you. Now I’m dying, and afraid of nothing so I will tell you the truth: I don’t like salty coffee, what a strange bad taste!But I have had salty coffee for my whole life.Since I have known you, I have never felt sorry for anything I have done for you. Having you with me is the biggest happiness of my life.If I could live again, I would want to know you and have you for my whole life, even if I had to drink the salty coffee again.”Her tears made the letter totally wet. Some day, someone asked her: "How does salty coffee taste?" "It’s sweet," she replied. ', random.int(1000), x._id, Date(), 600000));
                db.insertMany(Collect.unit, units, (result) => { });
            } else if (x.categoryName === 'Writing') {
                var units = [];
                units.push(Unit.init('Yoda - the cat with four ears', 'In Chicago, Illinois, couple Valerie and Ted Rock took the cat in two years ago after...', 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg', 'In Chicago, Illinois, couple Valerie and Ted Rock took the cat in two years ago after they visited a local bar, where a group of drinkers were handing the animal around and making fun of him. Since being adopted by the Rocks and after getting his picture posted on the Internet, the two-year-old cat immediately became famous. The Rocks have received calls from Good Morning America, Fox News and The Tyra Banks Show. His pictures are shown in many magazines. People are surprised at his extra pair of ears. Despite his strange appearance, Yoda - named after the pointy-eared Star Wars character - is a perfectly normal and attractive cat. His extra ears are thought to be the result of a genetic mutation. He likes being taken for a walk with his owners. But Yoda\'s owners are keeping a close watch on their much-loved pet.', random.int(1000), x._id, Date(), 600000));
                units.push(Unit.init('Salt coffee – Last Part', 'After 40 years, he passed away, left her a letter which said: “My dearest, please...', 'https://noidung.tienganh123.com/file/baihoc/reading/beginner/bai22/bai22.jpg', 'After 40 years, he passed away, and left her a letter which said: “My dearest, please forgive me, forgive my life\'s lie. This was the only lie I said to you - the salty coffee. Remember the first time we dated?I was so nervous at that time, actually I wanted some sugar, but I said salt, it was hard for me to change so I just went ahead. I never thought that would be the start of my biggest lie. I tried to tell you the truth many times in my life, but I was too afraid to, as I had promised never to lie to you. Now I’m dying, and afraid of nothing so I will tell you the truth: I don’t like salty coffee, what a strange bad taste!But I have had salty coffee for my whole life.Since I have known you, I have never felt sorry for anything I have done for you. Having you with me is the biggest happiness of my life.If I could live again, I would want to know you and have you for my whole life, even if I had to drink the salty coffee again.”Her tears made the letter totally wet. Some day, someone asked her: "How does salty coffee taste?" "It’s sweet," she replied. ', random.int(1000), x._id, Date(), 600000));
                db.insertMany(Collect.unit, units, (result) => { });
            } else if (x.categoryName === 'Grammar') {
                var units = [];
                units.push(Unit.init('Yoda - the cat with four ears', 'In Chicago, Illinois, couple Valerie and Ted Rock took the cat in two years ago after...', 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg', 'In Chicago, Illinois, couple Valerie and Ted Rock took the cat in two years ago after they visited a local bar, where a group of drinkers were handing the animal around and making fun of him. Since being adopted by the Rocks and after getting his picture posted on the Internet, the two-year-old cat immediately became famous. The Rocks have received calls from Good Morning America, Fox News and The Tyra Banks Show. His pictures are shown in many magazines. People are surprised at his extra pair of ears. Despite his strange appearance, Yoda - named after the pointy-eared Star Wars character - is a perfectly normal and attractive cat. His extra ears are thought to be the result of a genetic mutation. He likes being taken for a walk with his owners. But Yoda\'s owners are keeping a close watch on their much-loved pet.', random.int(1000), x._id, Date(), 600000));
                units.push(Unit.init('Salt coffee – Last Part', 'After 40 years, he passed away, left her a letter which said: “My dearest, please...', 'https://noidung.tienganh123.com/file/baihoc/reading/beginner/bai22/bai22.jpg', 'After 40 years, he passed away, and left her a letter which said: “My dearest, please forgive me, forgive my life\'s lie. This was the only lie I said to you - the salty coffee. Remember the first time we dated?I was so nervous at that time, actually I wanted some sugar, but I said salt, it was hard for me to change so I just went ahead. I never thought that would be the start of my biggest lie. I tried to tell you the truth many times in my life, but I was too afraid to, as I had promised never to lie to you. Now I’m dying, and afraid of nothing so I will tell you the truth: I don’t like salty coffee, what a strange bad taste!But I have had salty coffee for my whole life.Since I have known you, I have never felt sorry for anything I have done for you. Having you with me is the biggest happiness of my life.If I could live again, I would want to know you and have you for my whole life, even if I had to drink the salty coffee again.”Her tears made the letter totally wet. Some day, someone asked her: "How does salty coffee taste?" "It’s sweet," she replied. ', random.int(1000), x._id, Date(), 600000));
                db.insertMany(Collect.unit, units, (result) => { });
            }
        });
    });

    res.end();
});

module.exports = router;