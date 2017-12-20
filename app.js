const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log("This request is made: " + req.url);

  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, {'content-type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if (req.url === '/about') {
    res.writeHead(200, {'content-type': 'text/html'});
    fs.createReadStream(__dirname + '/about.html').pipe(res);

  } else if (req.url === '/api/developers') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    let infoObject = [{
        name: 'shoaib',
        role: 'developer',
        age: 21
      }, {
        name: 'John',
        role: 'designer',
        age: 27
      }]
    res.end(JSON.stringify(infoObject));

  } else {
    res.writeHead(404, {'content-type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }

});

server.listen(3009, '127.0.0.1');
console.log('Listening to port 3009');
