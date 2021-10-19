// 要素を取得
const child = document.querySelector('.child');

// コールバック関数を定義
// ブラウザ上で定義した範囲に要素が出入りした際に処理が実行される
const cb = function(entries, observer) {
    entries.forEach(entry => {
        
        // isIntersecting -> 要素が範囲に入ったとき
        if (entry.isIntersecting) {
            // class付与
            // targetに監視対象のDOMが格納されている
            entry.target.classList.add('inview');
        }
        else {
            // class削除
            entry.target.classList.remove('inview');
        }
    });
}


const options = {
    // root       -> 交差対象としたい親の要素を設定
    root: null,
    // rootMargin -> 交差点の位置を設定
    rootMargin: "-300px 0px",
    // threshold  -> 設定した交差点に対して要素が入ったときの場所を設定
    // 0: 要素が範囲に先に入る側
    // 1: 要素が範囲に後に入る側
    threshold: [0, 0.5, 1]
};

// IntersectionObserverにコールバック関数を引数に指定し、初期化
// 第１引数：　コールバック関数
// 第２引数：　オプション
const io = new IntersectionObserver(cb, options);

// 監視を行うDOMを引数に指定し、observeメソッドを使用し、対象の要素を登録
io.observe(child);