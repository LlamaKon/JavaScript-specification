const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');


const hello = function() {
    alert('hello');
};

btn.addEventListener('click', hello);
btn.removeEventListener('click', hello);


const change = function() {
    btn.style.color = 'red';
    h1.style.color = 'blue';
    console.log(this);
};

function changeBgColor() {
    h1.style.backgroundColor = 'green';
}

btn.addEventListener('click', change);
btn.addEventListener('click', changeBgColor);
