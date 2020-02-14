var http = require('http');
var fs = require('fs');


// instead of sending plain text, send HTML file to browser in content type and file path
var server = http.createServer(function(request, response){
    console.log('request was made: ' + request.url);
    response.writeHead(200, {'Content-Type': 'text/html'});
    var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    readStream.pipe(response);
});

server.listen(3000, '127.0.0.1');
console.log('server listening to port 3000');

