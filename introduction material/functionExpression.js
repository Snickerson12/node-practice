// normal function statement

function sayHi() {
    console.log('hi');
}

sayHi();

// passing function as argument
function callFunction(fun) {
    fun();
}

// function expression
var sayBye = function(){
    console.log('bye');
};

sayBye()
callFunction(sayBye)