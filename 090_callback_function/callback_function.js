// 一般的な関数
// 引数に関数を指定する
function hello(callback) {
    console.log('hello ' + callback());
}

// コールバック関数
// hello関数の引数(callback)に入れる関数を定義
function getName() {
    return 'Code Mafia';
}

// コールバック関数
// hello関数の引数(callback)に入れる関数を定義
const getFirstName = function() {
    return 'Code';
}

hello(getName);

hello(getFirstName);


// 無名関数を引数として渡す
// hello(function() {
//     return 'Code';
// });

// アロー関数として記述

hello(() => 'Code');


// 少し複雑な関数
function night(callback, lastname) {
    console.log('Good night, ' + callback(lastname));
}

// 無名関数をnight関数に渡す
// night関数の第１引数: 無名関数
// night関数の第２引数: 'Mafia'
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



