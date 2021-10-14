// idがbtnの要素を取得
const btn = document.querySelector('#btn');

// h1タグ情報を取得
const h1 = document.querySelector('h1');

// アラートを表示する関数を定義
const hello = function() {
    alert('hello');
};

// 色が変更される関数を定義
const change = function() {
    btn.style.color = 'red';
    h1.style.color = 'blue';
};

// 背景色を変更する関数を定義
function changeBgColor() {
    h1.style.backgroundColor = 'green';
}

// idがbtnのボタンをクリックした際に関数の処理を実行
btn.addEventListener('click', hello);
btn.addEventListener('click', change);
btn.addEventListener('click', changeBgColor);
// btn.removeEventListener('click', changeBgColor);

// btn.onclick = change;
// btn.onclick = changeBgColor;