// 通常の関数

function hello() {
    console.log('hello');
}

hello(); 


// あらかじめ変数に関数を代入
const morning = function(name) {
    console.log('morning')
}

morning();


// アロー関数
const night = (name = 'Tom') => console.log('Good night, ' + name);
night();


const array = [1,2,3];

// array.forEach(function(value) {
//     console.log(value)

// })

array.forEach(value => console.log(value));