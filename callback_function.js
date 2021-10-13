function hello(callback) {
    console.log('hello ' + callback());
}


function getName() {
    return 'Code Mafia';
}


const getFirstName = function() {
    return 'Code';
}

hello(getFirstName);

hello(getName);

hello(function() {
    return 'Code';
});


function night(callback, lastname) {
    console.log('Good night, ' + callback(lastname));
}

night(function(name) {
    return 'Code ' + name;
}, 'Mafia');


function doSomething(a, b, callback) {
    const result = callback(a, b);
    console.log(result);
}

function multiply(a, b) {
    return a * b;
}

function plus(a, b) {
    return a + b;
}

doSomething(2, 2, multiply);
doSomething(2, 4, plus);



