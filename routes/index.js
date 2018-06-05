var express = require('express');
var router = express.Router();

var authorized = false;
var users = [];

router.get('/', function(req, res, next) {
		res.render('index');
});

router.get('/main', function(req, res, next) {
		res.render('main');
});

router.get('/login', function(req, res, next) {
		res.render('login');
});

router.get('/registr', function(req, res, next) {
		res.render('registr');
});

router.post('/login', function(req, res, next) {
		if (users.lenght) {
			for (var i = 0; i < users.length; i++) {
				if (req.body.login ==  users[i].login && req.body.password == users[i].password) {
					authorized = true;
					break;
				} 
			}
		}

});

module.exports = router;
