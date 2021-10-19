// 変数に値を代入
let hello = 'Hello World';

// そのまま出力
console.log(hello);

// 文字列の長さを取得し、出力
// lengthはメソッドではなくプロパティ
console.log(hello.length);

// 文字列を大文字に変換
console.log(hello.toUpperCase());

// 文字列を小文字に変換
console.log(hello.toLowerCase());

// 文字列を部分表示
// substring(何番目から, 何番目まで)
console.log(hello.substring(0, 2));

// 文字列を部分表示
// slice(何番目から, 何番目まで)
console.log(hello.slice(0, 5));

// 文字列を分割
//split(区切る箇所)
console.log(hello.split(' '));
console.log(hello.split(''));