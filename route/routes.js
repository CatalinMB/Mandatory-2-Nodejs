var express = require('express');
var router = express.Router();
var handleRegister = require('./handleSignUp');
var handleLogIn = require('./handleLogIn');
var path = require ('path');

// GET route for reading data
router.get('/', function (req, res, next) {
  return res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

router.get('/home',function (req, res, next){
  return res.sendFile(path.join(__dirname + '/../dist/messages.html'));
});

router.post('/signup', handleRegister);
router.post('/login', handleLogIn);

module.exports = router;