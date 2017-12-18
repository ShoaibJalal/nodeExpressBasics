const http = require('http');
const server = http.createServer((req,res)=>{
  console.log("This request is made: " + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('This is a response body.');
});

server.listen(3009,'127.0.0.1');
console.log('Listening to port 3009');
