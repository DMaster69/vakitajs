
var mongoose = require('mongoose');

module.exports = mongoose.model('user',
	{
		id: String,
		username: String,
		password: String,
		email: String,
		firstName: String,
		lastName: String,
	fb: {
		id: String,
		access_token: String,
		firstName: String,
		lastName: String,
		email: String
	},
	twitter: {
		id: String,
		token: String,
		username: String,
		displayName: String,
		lastStatus: String
	}
	});