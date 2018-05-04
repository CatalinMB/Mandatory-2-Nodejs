var express = require('express');
var router = express.Router();
var handleRegister = require('./handleSignUp');
var handleLogIn = require('./handleLogIn');

// GET route for reading data
router.get('/', function (req, res, next) {
    return res.sendFile(__dirname + '/dist/index.html');
  });

router.post('/signup', handleRegister);
router.post('/login', handleLogIn);

module.exports = router;