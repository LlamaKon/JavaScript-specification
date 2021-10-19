// 配列生成
const array = [1,2,3,4,5];


// for
// 出力される値は0から始まる
for (let i = 0; i < array.length; i++) {
    console.log(i);
}

console.log('-------------------------------')

// for (配列の値の数字を出力したい場合)
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log('-------------------------------')

// for in
for (let i in array) {
    console.log(array[i]);
}

console.log('-------------------------------')

// for of
// (配列名[添字])としなくても、配列の値の１から出力される
for (let v of array) {
    console.log(v);
}

console.log('-------------------------------')


// 配列生成
const todos = [
    {
        id: 1,
        title: 'Go to School',
        completed: true
    },
    {
        id: 2,
        title: 'Go Swimming',
        completed: false
    },
    {
        id: 3,
        title: 'Go Shopping',
        completed: true
    }

]

// 全ての要素を取得
// (添字, id, title, completed)
for (let i = 0; i < todos.length; i++) {
    console.log(i, todos[i]);
}

console.log('-------------------------------')

// 添字とtitleを取得
for (let i = 0; i < todos.length; i++) {
    console.log(i, todos[i].title);
}

console.log('-------------------------------')

// completedがtrueのtitelのみ出力
for (let i = 0; i < todos.length; i++) {
    
    if (todos[i].completed === true) {
        
        console.log(i, todos[i].title);
    }
}