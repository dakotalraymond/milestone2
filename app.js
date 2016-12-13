var express = require('express');
var mysql = require('mysql')
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Dakoat101!',
  database: 'web'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})

connection.query('SELECT * FROM users', function (err, rows, fields) {
  if (err) throw err
  //console.log('blogs', {blogs: rows});
})

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/quiz', function(req, res){

});

app.get('/highScores', function(req, res){

});

app.get('/', function(req, res){
  res.render('index');
});

app.post('/', function(req, res){
  res.render('/quiz');
});

app.listen(3000, function(){
  console.log("The server is running on localhost:3000")
})
