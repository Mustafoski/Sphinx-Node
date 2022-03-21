const express = require('express');
const ejs = require('ejs');

const app = express();
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/nature', (req, res) => {
  res.render('pages/nature');
});

app.get('/the_world', (req, res) => {
  res.render('pages/the_world');
});

app.get('/about', (req, res) => {
  res.render('pages/about');
});
app.get('/contact', (req, res) => {
  res.render('pages/contact');
});

app.listen(3000, console.log(`Magic happens on port 3000`));
