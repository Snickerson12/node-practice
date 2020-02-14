var http = require('http');
var fs = require('fs');

// specify which file to read through stream
// createReadStream inherits from event emitter
var readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

readStream.on('data', function(chunk){
    console.log('new chunk received');
    console.log(chunk);
});