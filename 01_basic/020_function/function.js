// 出力したい値を変数に入れ、出力
// 異なる値を出力したい場合、コードが増えてしまう
let name = 'Mike';
console.log('Hello, ' + name);

let name2 = 'Bob';
console.log('Hello, ' + name2);


// コードを少なくしたい場合、関数を使用する
// 異なる値を出力したい場合、関数の呼び出しのみで出力可能
function hello(name) {
    console.log('Hello, ' + name);
}
hello('SuperMan');
hello('SuperWoman')


// 引数の数を増やすことも可能
function helloAge(name, age) {

    console.log("hello " + name + ". I'm " + age);
    return name + age;
}
helloAge('Joy', 10);

// 関数の返り値を変数に格納することも可能
// Baby ---> name
// 20   ---> age
const returnValue = helloAge('Baby', 20)
console.log(returnValue)


// 関数を変数に代入することも可能
// (無名関数を変数に代入)
// 変数に代入する関数の場合、関数実行文よりも前に関数を定義
const morning = function(name, age) {

    console.log('good morning ' +  name + ". I'm " + age);
}
morning('Gen', '30')

// 上記の関数と同じ結果が得られる関数
// function morning(name, age) {
//     console.log('good morning ' +  name + ". I'm " + age);
// }
// morning('Gen', 30);