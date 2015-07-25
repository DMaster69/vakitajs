var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
	// Display the Login page with any flash message, if any
	res.render('index', { title:'Inicio', message: req.flash('message') });
	});

module.exports = router;
