const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log("This request is made: " + req.url);
  res.writeHead(200, {'Content-Type': 'application/json'});
  let infoObject = {
    name: 'shoaib',
    role: 'developer',
    age: 21
  }
  res.end(JSON.stringify(infoObject));

});

server.listen(3009, '127.0.0.1');
console.log('Listening to port 3009');
