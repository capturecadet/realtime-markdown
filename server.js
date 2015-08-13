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

// listen on port 8000
var port = process.env.PORT || 8000;
app.listen(port);
