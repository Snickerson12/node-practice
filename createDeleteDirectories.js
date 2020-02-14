var fs = require('fs');

// will throw an error if file has already been deleted and no longer exists
fs.unlink('writeMe.txt', function(err){
    if(err) throw err
});

// synchronous method to create directory
fs.mkdirSync('stuff');

// synchronous method to delete directory
fs.rmdirSync('stuff');

// async version of creation:
fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt', 'utf8', function(err, data){
        fs.writeFile('./stuff/writeMe.txt', data, function(err){
            if(err) throw err
        })
    })
});

// async version of removing directory
fs.unlink('./stuff/writeMe.txt', function(){
    fs.rmdir('stuff', function(err){
        if(err) throw err
    });
});
