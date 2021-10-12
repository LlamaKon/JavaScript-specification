const array = [1,2,3,4,5];


console.log('----- for -----')

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log('----- for in -----')

for (let i in array) {
    console.log(array[i]);
}

console.log('----- for of -----')

for (let v of array) {
    console.log(v);
}

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

for (let i = 0; i < todos.length; i++) {
    console.log(i, todos[i]);
}

console.log('----- title -----');

for (let i = 0; i < todos.length; i++) {
    console.log(i, todos[i].title);
}

console.log('----- completed -----');

for (let i = 0; i < todos.length; i++) {
    
    if (todos[i].completed === true) {
        console.log(i, todos[i].completed);
    }
}