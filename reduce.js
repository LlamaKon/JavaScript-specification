const array = [1,2,3,4,5];

array.reduce(function(accu, curr) {

    console.log(accu, curr);
    // return accu + curr;
}, 10);


const str = 'animation';
const strArray = str.split('');

console.log(strArray);

const result = strArray.reduce((accu, curr) => {
    return accu + '<' + curr + '>';
}, '');

console.log(result);




const str2 = 'Happy';
const strArray2 = str2.split('');


function tag(accu, curr) {
    console.log(accu);
    return `${accu}<${curr}>`;
}


function reduce(array, callback, defaultValue) {
    let accu = defaultValue;

    for(let i = 0; i < array.length; i++) {
        let curr = array[i];
        accu = callback(accu, curr);
    }
    return accu;

}

const result2 = reduce(strArray2, tag, "");

console.log(result2);