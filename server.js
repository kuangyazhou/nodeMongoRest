var express = require('express');
var app = express();
var port = process.env.PORT || 2333;
var mongoose = require('mongoose');
var task = require('./api/models/model');
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/routes');

routes(app);

// app.get('/', function(req, res) {
//     res.send('fuck the king！！！');
// })
app.listen(port);
console.log('todo list restful API server started on:' + port);