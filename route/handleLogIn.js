var User = require('../middlewares/User.js')

function handleLogIn(res, req) {
    console.log('login', req)
    var userdata = {
        email: req.body.email,
        password: req.body.password
    }

    User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
        if (error || !user) {
          var err = new Error('Wrong email or password.');
          err.status = 401;
          return next(err);
        } else {
          req.session.userId = user._id;
          return res.redirect('/profile');
        }
      });
    } else {
      var err = new Error('All fields required.');
      err.status = 400;
      return next(err);
    }
}

module.exports = handleLogIn;