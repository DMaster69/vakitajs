var express = require('express');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/authlogin');
}
module.exports = function(passport){
    /* GET  */
	router.get('/', function(req, res) {
		res.redirect('/auth/login');
	});
	
	/* GET login page. */
	router.get('/login', function(req, res) {
    	// Display the Login page with any flash message, if any
		res.render('login', { title:'Login', message: req.flash('message') });
	});
	/* Handle Login POST */
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/home',
		failureRedirect: '/auth/login',
		failureFlash : true  
	}));

	/* GET Registration Page */
	router.get('/signup', function(req, res){
		res.render('register',{ title:'Registro', message: req.flash('message')});
	});

	/* Handle Registration POST */
	router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/home',
		failureRedirect: '/auth/signup',
		failureFlash : true  
	}));
	
	/* Handle Logout */
	router.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
	
	// route for facebook authentication and login
	// different scopes while logging in
	router.get('/facebook', 
		passport.authenticate('facebook', {  scope : ['email','public_profile','user_friends'] }
	));

	// handle the callback after facebook has authenticated the user
	router.get('/facebook/callback',
		passport.authenticate('facebook', {
			successRedirect : '/home',
			failureRedirect : '/'
		})
	);

	// route for twitter authentication and login
	// different scopes while logging in
	router.get('/twitter', 
		passport.authenticate('twitter'));

	// handle the callback after facebook has authenticated the user
	router.get('/twitter/callback',
		passport.authenticate('twitter', {
			successRedirect : '/twitter',
			failureRedirect : '/'
		})
	);
	
	return router;
}