// 配列生成
const array = [1,2,3,4,5];

// 一般的なfor文
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log('----------------------------');

// 関数化
// function forEach(arr) {

//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// forEach(array);

// コールバック関数を使用
function forEach(arr, callback) {

    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

// コールバック関数
function log(val) {
    console.log(val);
}

forEach(array, log);

console.log('----------------------------');


// コールバック関数
function double(val) {
    val = val * 2;
    log(val);
}

forEach(array, double);