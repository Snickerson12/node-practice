var fs = require('fs');
// common to set variable name to module name
// fs allows reading and writing of files

// synchronous method, reads file before it can move on to the rest of the code
// pass which file it should read and encode type
var readMe = fs.readFileSync('readMe.txt', 'utf8');

// write a file:
// pass file destination name and content of file
fs.writeFileSync('writeMe.txt', readMe)

// asynchronous versions:
// third parameter of a function accepting an error and the data
// async writeFile requires error callback function
fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('writeMe.txt', data, (err) => {
        if(err) throw err;
    })
});

