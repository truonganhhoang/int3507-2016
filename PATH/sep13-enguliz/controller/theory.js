var express = require('express');
var router = express.Router();

router.get('/listen', function(req, res){

    var obj = [
        {
            lessonId: "a1",
            lessonName: "Unit1: Greetings",
            lessonThumbnail: "https://data.tienganh123.com/images/avatar/unit1.jpg",
            lessonViews: 1234,
            lessonCreatedDate: "20/9/2016"
        },
        {
            lessonId: "a2",
            lessonName: "Unit2: People descriptions",
            lessonThumbnail: "https://data.tienganh123.com/images/avatar/unit2.jpg",
            lessonViews: 9981,
            lessonCreatedDate: "21/9/2016"
        },
        {
            lessonId: "a3",
            lessonName: "Unit3: Clothes",
            lessonThumbnail: "https://data.tienganh123.com/images/avatar/unit3.jpg",
            lessonViews: 1231,
            lessonCreatedDate: "22/9/2016"
        },
        {
            lessonId: "a4",
            lessonName: "Unit4: Family",
            lessonThumbnail: "https://data.tienganh123.com/images/avatar/unit4.jpg",
            lessonViews: 5654,
            lessonCreatedDate: "23/9/2016"
        },
        {
            lessonId: "a5",
            lessonName: "Unit5: Weather",
            lessonThumbnail: "https://data.tienganh123.com/images/avatar/unit5.jpg",
            lessonViews: 5654,
            lessonCreatedDate: "23/9/2016"
        },
        {
            lessonId: "a6",
            lessonName: "Unit6: Jobs",
            lessonThumbnail: "https://data.tienganh123.com/images/avatar/unit6.jpg",
            lessonViews: 5654,
            lessonCreatedDate: "23/9/2016"
        },
        {
            lessonId: "a7",
            lessonName: "Unit7: Time",
            lessonThumbnail: "https://data.tienganh123.com/images/avatar/unit7.jpg",
            lessonViews: 5654,
            lessonCreatedDate: "23/9/2016"
        },
        {
            lessonId: "a8",
            lessonName: "Unit8: Dates",
            lessonThumbnail: "https://data.tienganh123.com/images/avatar/lntacb_unit8.jpg",
            lessonViews: 5654,
            lessonCreatedDate: "23/9/2016"
        },
        {
            lessonId: "a9",
            lessonName: "Unit9: Movies",
            lessonThumbnail: "https://data.tienganh123.com/images/avatar/lntacb_unit9.jpg",
            lessonViews: 5654,
            lessonCreatedDate: "23/9/2016"
        }
    ]

    res.send(obj);
});

module.exports = router;