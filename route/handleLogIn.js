var User = require('../middlewares/User.js')

function handleLogIn(req, res) {
    console.log('login', req.body)
    var userdata = {
        email: req.body.email,
        password: req.body.password
    }

    User.authenticate(req.body.email,req.body.password, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      } else {
        // req.session.userId = user._id;
        var passedVariable = req.query.valid;
        return res.send({ redirect: '/home'});
      }
    });
}

module.exports = handleLogIn;