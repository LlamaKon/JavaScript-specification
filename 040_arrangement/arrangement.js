// 配列の定義

const arr = new Array(1,2,3,4,5,6)
const array = [1,2,3,4,5,6];

// 配列の全ての要素を出力
console.log(array);

// 配列の3番目を出力
console.log(array[3]);

// 配列の4番目を出力
console.log(array[4]);

// 配列の2番目の値を10に変更
array[2] = 10;

// 値変更後の配列を出力
console.log(array);

// 値変更後の配列の2番目を出力
console.log(array[2]);


// 配列には様々な型の要素を格納することが可能
const mixArray = [1,2,3,4,5,'moji',false]

// 配列の全ての要素を出力
console.log(mixArray);

// 配列の長さを取得し出力
console.log(mixArray.length);


// 要素を末尾に追加
mixArray.push('new item');
console.log(mixArray);

// 要素を先頭に追加
mixArray.unshift('flont value')
console.log(mixArray);

// 要素の末尾を削除
mixArray.pop();
console.log(mixArray);

// 要素の先頭を削除
mixArray.shift();
console.log(mixArray);