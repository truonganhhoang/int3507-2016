var http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello World Node.js\n');
}).listen(1000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1000/');