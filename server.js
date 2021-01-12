const  text  = require("express");
const http = require("http");

const server = function(rep, res) {
    res.writeHead(200, {'Content-type': 'text/html' });
    res.write( '<h1>This Is My First Server</h1>');
    res.end();
}

const servidor = http.createServer(server);

servidor.listen(3000, function () {
    console.log('server is on port 3000');
})