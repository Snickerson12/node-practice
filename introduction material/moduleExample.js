var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array'
};

var adder = function(a, b){
    return `The sum of a and b is ${a+b}`
};

var pi = 3.142;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

//can write out all exports individually or just include export syntax on declaration of function
// i.e. module.exports.counter = function(arr)

// or create an object with all exports:
// if they share the same name you could just list it once
// so instead of counter: counter, just counter

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};