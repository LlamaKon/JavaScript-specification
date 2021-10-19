// 配列生成
const array = [1,2,3,4,5];

// reduceメソッド
// accu -> 蓄積されるもの
// curr -> accuに値を追加するもの
array.reduce(function(accu, curr) {
    console.log(accu, curr);
    return accu + curr;
});

console.log('---------------------------');

// 乗算
array.reduce(function(accu, curr) {
    console.log(accu, curr);
    return accu * curr;
});

console.log('---------------------------');

// accuの初期値としてreduceメソッドの第２引数に初期値を設定
// accuの初期値を設定することでcurrの値がすべて出力される
array.reduce(function(accu, curr) {
    console.log(accu, curr);
    return accu + curr;
}, 10);

console.log('---------------------------');

// 第２引数に初期値を設定しない場合
array.reduce(function(accu, curr) {
    console.log(accu, curr);
    
});

console.log('---------------------------');

// 文字列を定義
const str = 'animation';

// 文字列を配列に分割するためにsplitメソッドを使用
const strArray = str.split('');

// 文字列を出力
console.log(strArray);


// 文字列animationを<>で括って出力したい場合
const result = strArray.reduce((accu, curr) => {
    return accu + '<' + curr + '>';
}, '');

console.log(result);



// 文字列生成
const str2 = 'Happy';

// 文字列を配列に分割するためにsplitメソッドを使用
const strArray2 = str2.split('');


function tag(accu, curr) {
    console.log(accu);
    return `${accu}<${curr}>`;
}

const result2 = strArray2.reduce(tag, "");
console.log(result2)

// コールバック関数を使用してreduceメソッドを使用
// 第１引数： 配列
// 第２引数： コールバック関数
// 第３引数： 初期値
function reduce(array, callback, defaultValue) {
    let accu = defaultValue;

    for(let i = 0; i < array.length; i++) {
        let curr = array[i];
        accu = callback(accu, curr);
    }
    return accu;
}

// コールバック関数
function call(accu, curr) {
    console.log(accu);
    return `${accu}<${curr}>`;
}

const result3 = reduce(strArray2, call, "");
console.log(result3);