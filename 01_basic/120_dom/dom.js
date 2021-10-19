/*
    querySelectorメソッド

        ・CSSを指定するような記述でデータを取得できる
         【例】document.querySelector('#main-title')

    querySelectorAllメソッド

        ・querySelectorでは1番目の要素しか取得できないため、
        　querySelectorAllを使用して全ての要素を取得する
    
    children

        ・子要素を取得できる
         【例】document.body.children

    innerHTML

        ・該当する要素の中身を取得できる
        【例】h1.innerHTML (h1タグの中身（文字列）を取得)
        ・色などを変更する場合などはinnerHTMLを使用する
        【例】h1.innerHTML = 'AAA <span style="color: red">BBB</span>'
        → BBBの文字色が赤色に変更

    textContent

        ・テキストのみを取得可能　
        【例】h1.textContent (h1タグのテキストのみ取得)
        ・textContentを使用して色などを変更しようとすると全てが文字列になる
        【例】h1.textContent = 'AAA <span style="color: red">BBB</span>
        →''で囲まれた部分が全てテキストとなりブラウザに表示される
        
*/

// idがmain-titleのタグ情報を取得
const mainTitle = document.querySelector('#main-title');

// classがsub-titleのタグ情報を取得
const subTitle = document.querySelector('.sub-title');

// h1タグ情報を取得
const h1 = document.querySelector('h1');

// classがitemのタグ情報を全て取得
const list = document.querySelectorAll('.item');

// h1タグのBBBBBの文字色を青色に変更
h1.innerHTML = 'AAAAA <span style="color: blue;">BBBBB</span>';

// h1タグの情報を出力
console.log(h1.textContent);

// h1タグの中の文字色を変更
h1.style.color = 'red';

// h1タグにunderlineというクラス名を追加
h1.classList.add('underline');

// h1タグのunderlineというクラス名を削除
h1.classList.remove('underline');

// h1タグのunderlineを表示させたり非表示にさせたりできる
h1.classList.toggle('underline');

// ulタグ情報を取得
const ul = document.querySelector('ul');

// liタグの情報を取得
const firstLi = ul.querySelector('li');

// 変数firstLiの色を変更
firstLi.style.color = 'black';

// ulタグの中にあるliタグ情報を全て取得
const li = document.querySelectorAll('ul > li');

// liタグの1番目の要素の色を変更(liタグ情報は先程変数に格納)
li[0].style.color = 'purple'

// liタグの要素の色を全て変更
li.forEach(node => node.style.color = 'purple');