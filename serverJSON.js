var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
    console.log('request was made: ' + request.url);
    response.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = {
        name: 'Jordan',
        job: 'Fitness Instructor',
        age: 27
    };
    response.end(JSON.stringify(myObj));
    // .end method expects string or buffer so object must be serialized to be a json string
});

server.listen(3000, '127.0.0.1');
console.log('server listening to port 3000');

