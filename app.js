const express = require('express');
const bodyParser = require('body-parser');
let app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about', {qs: req.query});
});
app.post('/about',urlencodedParser, (req, res) => {
  console.log(req.body);
  res.render('about-success', {data: req.body});
});


app.get('/student/:name', (req, res) => {
  const data = {age: 22, department: 'Science', subjects: ['Maths','Physics','Chemistry']}
  res.render('student', {student: req.params.name, data: data});
});

app.listen(3001);
