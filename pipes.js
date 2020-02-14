var http = require('http');
var fs = require('fs');

// can only use pipe method from readable streaam, not from writable stream
// alternative to manually waiting for data event and writing out write method to stream

// var readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// var writeStream = fs.createWriteStream(__dirname + '/writeMe.txt');
// readStream.pipe(writeStream);


// response object is a readable stream
// creating a read stream that reads content of file
// piped read stream into the response stream
var server = http.createServer(function(request, response){
    console.log('request was made: ' + request.url);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    var readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    readStream.pipe(response);
});

server.listen(3000, '127.0.0.1');
console.log('server listening to port 3000');

