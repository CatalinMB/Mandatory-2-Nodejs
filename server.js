var express = require("express")
var app = express()
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/data');
var db = mongoose.connection;

db.once('open', function () {
    console.log("worksssss!"); 
  });

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// include routes
var routes = require('./route/routes.js');
app.use('/', routes);

// app.get("/", function(req, res) {
//     res.sendFile(__dirname + "/dist/index.html");
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('File Not Found');
    err.status = 404;
    next(err);
  });
  

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
res.status(err.status || 500);
res.send(err.message);
});

app.listen(3020,()=>{
 console.log("Well done, now I am listening...")
})

app.use(express.static(__dirname))