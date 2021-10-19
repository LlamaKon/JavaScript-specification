// if文

// if(条件１) {
//     処理;
// }
// else if (条件２) {
//     処理;
// }
// else {
//     処理;
// }


// ==  -> 型の比較まで行わない
if(1 == '1') {
    console.log('this is true');
}
else {
    console.log('this is false');
}


// === -> 型の比較まで行う
if(1 === '1') {
    console.log('this is true');
}
else {
    console.log('this is false');
}


// true : 1
// false: 0
if (1 == true) {
    console.log(true);
}
else {
    console.log(false);
}


// 型の比較まで行わない
// 数値0は文字列0とは異なる -> false
if (0 != '0') {
    console.log('this is true');
}
else {
    console.log('this is false');
}


// 型の比較まで行う
// 数値0は文字列0とは異なる -> true
if (0 !== '0') {
    console.log('this is true');
}
else {
    console.log('this is false');
}


// 複数の条件を設定
// && -> 且つ
if (0 == '0' && 0 === '0') {
    console.log('this is true');
}
else {
    console.log('this is false');
}


// 複数の条件を設定
// || -> または
if (0 == '0' || 0 === '0') {
    console.log('this is true');
}
else {
    console.log('this is false');
}
