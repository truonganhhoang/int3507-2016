var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Lesson',
  	user: req.user,
  	});
});

router.post('/', function(req, res, next){
	console.log(req);
});

router.get('/lesson/listening', function(req, res, next){
	res.render('./lesson/listening/index' ,{
		title: 'Listening Lesson',
		user: req.user,
		currentUrl: '/lesson/listening'
	});
});

router.get('/lesson/speaking', function(req, res, next){
	res.render('./lesson/speaking/index' ,{
		title: 'Speaking Lesson',
		user: req.user,
		currentUrl: '/lesson/speaking'
	});
});

// Reading Skill
router.get('/lesson/reading', function(req, res, next){
	res.render('./lesson/reading/index' ,{
		title: 'Reading Lesson',
		user: req.user,
		currentUrl: '/lesson/reading'
	});
});
router.get('/lesson/reading/unit-1', function(req, res, next){
	res.render('./lesson/reading/unit-1' ,{
		title: 'Reading Lesson | Unit 1',
		user: req.user,
		currentUrl: '/lesson/reading'
	});
});
router.get('/lesson/reading/unit-2', function(req, res, next){
	res.render('./lesson/reading/unit-2' ,{
		title: 'Reading Lesson | Unit 2',
		user: req.user,
		currentUrl: '/lesson/reading'
	});
});
router.get('/lesson/reading/unit-3', function(req, res, next){
	res.render('./lesson/reading/unit-1' ,{
		title: 'Reading Lesson | Unit 3',
		user: req.user,
		currentUrl: '/lesson/reading'
	});
});
router.get('/lesson/reading/unit-4', function(req, res, next){
	res.render('./lesson/reading/unit-1' ,{
		title: 'Reading Lesson | Unit 4',
		user: req.user,
		currentUrl: '/lesson/reading'
	});
});
router.get('/lesson/reading/unit-5', function(req, res, next){
	res.render('./lesson/reading/unit-5' ,{
		title: 'Reading Lesson | Unit 5',
		user: req.user,
		currentUrl: '/lesson/reading'
	});
});

router.get('/lesson/writing', function(req, res, next){
	res.render('./lesson/writing/index' ,{
		title: 'Writing Lesson',
		user: req.user,
		currentUrl: '/lesson/writing'
	});
});
module.exports = router;
