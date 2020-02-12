// in node the global object is not just the window, it includes native methods 
// some of these methods include console, setTimeout, setInterval, require, exports, etc

console.log('hello via node')

setTimeout(function() {
    console.log('2 seconds have passed');
}, 2000);

var time = 0

setInterval(function(){
    time += 2;
    console.log(time + ' seconds have passed')
}, 2000)

var timer = setInterval(function() {
    time += 2;
    console.log(time + ' seconds have passed');
    if (time > 5) {
        clearInterval(timer);
    }
}, 2000);

// states current directory
console.log(__dirname);

// states current file path
console.log(__filename);

//require, exports