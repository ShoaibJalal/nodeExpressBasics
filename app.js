const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.send('U r at Home Page.');
});

app.get('/student/:id', (req, res) => {
  res.send('You are seeing a student with ID of : ' + req.params.id);
});

app.listen(3001);
