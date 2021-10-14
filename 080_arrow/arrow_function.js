// 通常の関数
function hello() {
    console.log('hello');
}

hello(); 


// あらかじめ変数に関数を代入
const morning = function(name = 'Default') {
    console.log('Good morning, '  + name);
}

morning('Bob');
morning('Mike');
// 引数を指定しない場合はデフォルトの値が出力される
morning();


// アロー関数
// const night = function(name = 'Tom') {
//     console.log('Good night, ' + name);
// }

// 上記の関数をアロー関数で表記
// ・functionを取り除く
// ・引数と「{」の間に「=>」を記述
// ・「{}」の中の処理が１行の場合、「{}」を取り除くことが可能
// ・引数にデフォルト値が無い場合、引数の　「()」を取り除くことが可能
// ・引数が2つ以上の場合は「()」が必要
// ・処理にreturnがある場合、「{}」内の処理が１行であればreturnは省略


const night = (name = 'Tom') => console.log('Good night, ' + name);
night();
night('Michel')


const happy = name => console.log('Hey! ' + name + '. Happy New Year!!');
happy('Tommy');


const array = [1,2,3];

// array.forEach(function(value) {
//     console.log(value)

// })

array.forEach(value => console.log(value));