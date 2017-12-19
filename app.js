const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log("This request is made: " + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  let myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  myReadStream.pipe(res);

});

server.listen(3009, '127.0.0.1');
console.log('Listening to port 3009');
