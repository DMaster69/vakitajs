var express = require('express');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/auth/login');
}

/* GET home page. */
router.get('/', function(req, res) {
	// Display the Login page with any flash message, if any
	res.render('index', { title:'Inicio', message: req.flash('message') });
	});

/* GET Twitter View Page */
router.get('/twitter', isAuthenticated, function(req, res){
	res.render('twitter', { user: req.user });
	});

module.exports = router;
