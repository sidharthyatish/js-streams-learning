const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile(__dirname + '/file.txt', (err, data) => {
        res.end(data)
    })
});

server.listen(5000);