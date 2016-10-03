var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');
var User = require('../models/User.js');

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('./users/login', {
  	title: 'Login',
  	user : req.user
  });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
	res.redirect('/');
});

router.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
});

router.get('/register', function(req, res) {
		res.render('./users/register', {
			title: 'Register'
		});
});

router.post('/register', function(req, res) {
		User.register(new User({ username : req.body.username }), req.body.password, function(err, account) {
				if (err) {
					req.session.message.error.push('' + err);
					return res.render('./users/register', { account: account });	
				} else{
					passport.authenticate('local')(req, res, function() {
						req.session.message.info.push('Register success!');
						res.redirect('/users/login');
					});
				}
		});
});
module.exports = router;
