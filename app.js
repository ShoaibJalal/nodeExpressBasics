const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.send('U r at Home Page.');
});

app.listen(3001);
