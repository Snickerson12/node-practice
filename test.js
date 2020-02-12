var stuff = require('./moduleExample');

// console.log(stuff.counter(['one', 'two', 'three']));
// console.log(stuff.adder(3, 4));
// console.log(stuff.adder(stuff.pi, 5));

//events is a core module
var events = require('events');

//can create custom events in node.js 
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(message){
    console.log(message)
});

//first argument is which function to emit followed by any passed arguments
myEmitter.emit('someEvent', 'the event was emitted');

//utilities module - allows inheritance from objects built into node.js
var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('James');
var carla = new Person('Carla');
var mark = new Person('Mark');
var people = [james, carla, mark];


// attach custom event to each person in array
people.forEach(function(person){
    person.on('speak', function(message){
        console.log(`${person.name} said ${message}`)
    });
});

james.emit('speak', 'hey dudes');
mark.emit('speak', 'I want a curry');
