// 無名関数（コールバック関数）

function hello(name, age) {

    console.log('hello ' + name + age);
    return name + age;
}

hello('Java ', 10);
const returnValue = hello('JavaScript ', 20)
console.log(returnValue)



const morning = function(name, age) {

    console.log('good morning ' + name + age);
}

morning('JS ', '30')