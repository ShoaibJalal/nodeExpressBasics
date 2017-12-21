const express = require('express');

let app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about', {qs: req.query});
});


app.get('/student/:name', (req, res) => {
  const data = {age: 22, department: 'Science', subjects: ['Maths','Physics','Chemistry']}
  res.render('student', {student: req.params.name, data: data});
});

app.listen(3001);
