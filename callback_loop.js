const array = [1,2,3,4,5];

function forEach(arr, callback) {

    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

function log(val) {
    console.log(val);
}

function double(val) {
    val = val * 2;
    log(val);
}

forEach(array, log);
console.log('----------');
forEach(array, double);