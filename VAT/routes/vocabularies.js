var express = require('express');
var router = express.Router();
var Vocabulary = require('../models/Vocabulary.js');

/* GET all voca. */
router.get('/', function(req, res, next) {
  Vocabulary.find(function(err, vocabularies){
  	if(err){
  		res.send(404, 'Error! Try again' + err);
  	} else{
  		res.json(vocabularies);
  	}
  });
});
/*GET single voca*/
router.get('/id/:id', function(req, res, next){
	Vocabulary.findById(req.params.id, function(err, voca){
		if(err){
			res.send(404, 'Error! Try again' + err);
		} else{
			res.json(voca);
		}
	});
});

router.get('/en/:en', function(req, res, next){
	Vocabulary.find({'en': req.params.en}).exec(function(err, voca){
		if(err){
			res.send(404, 'Error! Try again' + err)
		} else{
			res.json(voca);
		}
	});
});

router.get('/vi/:vi', function(req, res, next){
	Vocabulary.find({'vi': req.params.vi}).exec(function(err, voca){
		if(err){
			res.send(404, 'Error! Try again' + err);
		} else{
			res.json(voca);
		}
	});
});

/*ADD a vocabulary*/
router.post('/new', function(req, res, next){
	var newVoca = new Vocabulary(req.body);
	newVoca.save(function(err){
		if(err){
			res.send(404, 'Error: ' + err);
		} else{
			res.json(newVoca);
		}
	});
});

/*UPDATE a voca*/
router.put('/edit/:id', function(req, res, next){
	Vocabulary.findById(req.params.id, function(err, voca){
		if(err){
			res.send(404, '' + err);
		} else{
			voca.en = req.body.en;
			voca.type = req.body.type;
			voca.vi = req.body.vi;
			voca.save(function(err){
				if(err){
					res.send(400, '' + err)
				}
			});
		}
	});
});

/*DELETE a voca*/
router.delete('/remove/:id', function(req, res, next){
	Vocabulary.remove({_id: req.params.id}, function(err){
		if(err){
			res.send('Error: ' + err);
		}
	});
});


module.exports = router;
