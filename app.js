const express = require('express');

let app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/student/:name', (req, res) => {
  const data = {age: 22, department: 'Science', subjects: ['Maths','Physics','Chemistry']}
  res.render('student', {student: req.params.name, data: data});
});

app.listen(3001);
