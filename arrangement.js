const array = [1,2,3,4,5,6];
console.log(array);
console.log(array[3]);
console.log(array[4]);
array[2] = 10;
console.log(array);
console.log(array[2]);

const mixArray = [1,2,3,4,5,'moji',false]
console.log(mixArray);
console.log(mixArray.length);

// 末尾に追加
mixArray.push('new item');
console.log(mixArray);

// 先頭に追加
mixArray.unshift('flont value')
console.log(mixArray);

// 末尾を削除
mixArray.pop();
console.log(mixArray);

// 先頭を削除
mixArray.shift();
console.log(mixArray);