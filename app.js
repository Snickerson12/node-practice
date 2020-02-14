// http core module with native createServer method
var http = require('http');

// create server and send header status and content type
// request.url method logs the requests to the server
var server = http.createServer(function(request, response){
    console.log('request was made: ' + request.url);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Server Response text!');
});

// port and local server IP server should listen to
server.listen(3000, '127.0.0.1');
console.log('server listening to port 3000');

