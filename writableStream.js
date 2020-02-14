var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var writeStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// reading file from read stream and everytime we get a chunk of data, write that chunk to the write stream
// receive data more quickly by sending data as buffer chunks through a stream
readStream.on('data', function(chunk){
    console.log('new chunk received');
    writeStream.write(chunk);
});