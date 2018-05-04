var User = require('../middlewares/User.js')

function handleRegister(req, res) {

    console.log("signup",req.body);

    // res.send(req.body.username + req.body.password);
    // if (req.body.email &&
    //     req.body.username &&
    //     req.body.password &&) {

    var userData = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }

    //use schema.create to insert data into the db
    User.create(userData, function (err, user) {
        if (err) {
            return res.send(err)
        } else {
            // return res.redirect('/profile');
            return res.send('ok. good.');
        }
    });
}


module.exports = handleRegister;