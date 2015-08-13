var path = require('path');

var express = require('express');
var app = express();

app.set('view engine', 'ejs');

// public folder to store assets
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', function(req, res) {
  res.render('pad');
});

app.get('/(:id)', function(req, res) {
  res.render('pad');
});

var sharejs = require('share');
require('redis');

var options = {
  db: {type: 'redis'}
};

sharejs.server.attach(app, options);

// listen on port 8000
var port = process.env.PORT || 8000;
app.listen(port);
