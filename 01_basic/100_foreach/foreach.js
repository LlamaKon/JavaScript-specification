// 配列生成
const array = [1,2,3,4,5];

// forEachメソッド
array.forEach(function(val) {
    console.log(val);
})

console.log('-------------------------');

// forEachメソッドの引数
// 第１引数：値
// 第２引数：添字
// 第３引数：配列
array.forEach(function(v, i, arr) {
    console.log(v, i, arr);
})

console.log('-------------------------');


// for文の記述
// forEach文よりも記述するコードが多い
for (let i = 0; i < array.length; i++) {
    const v = array[i];
    console.log(v);
}

console.log('-------------------------');


// forEach文をアロー関数化
// (引数が１つの場合)
array.forEach(v => console.log(v));