document.addEventListener('DOMContentLoaded', function () {

    // classがanimate-titleの情報を取得し変数に格納
    const el = document.querySelector('.animate-title');
    // 変数elの文字列を配列にするためにtrim,splitを使用
    // trim: 前後のスペースを取り除く
    const str = el.innerHTML.trim().split("");
    
    // let concatStr = '';

    // 通常のfor文で文字を1文字ずつ取得
    // for(let c of str) {
    //     c = c.replace(/\s+/, '&nbsp;');
    //     concatStr += `<span class="char">${c}</span>`;
    // }

    // reduceを使用して文字を1つずつ取得
    el.innerHTML = str.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        return `${acc}<span class="char">${curr}</span>`;
    }, "");
});