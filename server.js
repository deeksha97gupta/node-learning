const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/secret") {
        res.end('No secret');
    }
    res.end('hello world');
});

server.listen(7777)