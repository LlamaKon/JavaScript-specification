class ScrollObserver {
    // コンストラクタ定義
    /*
    第１引数 -> 要素
    第２引数 -> コールバック関数
    第３引数 -> オプション
    */
    constructor(els, cb, options) {
        // 要素取得
        // クラスの中のプロパティに値を格納するためにthisを使用
        // コンストラクタに与えられた引数をそのまま引数として使用
        this.els = document.querySelectorAll(els);
        // オプション
        /*
        root       -> 交差対象とした親の要素を指定
        rootMargin -> 交差点の位置を指定
        threshold  -> 設定した交差点に対して要素が入った時の場所を指定
                      0: 要素が範囲に先に入る側
                      1: 要素が範囲に後に入る側
        */
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
            once: true
        };
        // コンストラクタの引数で与えられたコールバック関数をthisで格納
        this.cb = cb;
        // assignメソッドにより、第１引数の値を第２引数の値で上書きする
        this.options = Object.assign(defaultOptions, options);
        this.once = this.options.once;
        this._init();
    }
    // メソッド定義(初期化処理)
    _init() {
        // コールバック関数定義
        const callback = function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    /*
                        コールバック関数にtrue or falseを
                        返すことでより柔軟に対応できるようになるs
                    */
                    // 第１引数 -> DOMを渡す
                    // 第２引数 -> trueを渡す
                    this.cb(entry.target, true);
                    if(this.once) {
                        observer.unobserve(entry.target);
                    }
                } else {
                    // 第１引数 -> DOMを渡す
                    // 第２引数 -> falseを渡す
                    this.cb(entry.target, false);
                }
            });
        };

        // IntersectionObserverでは参照先のオブジェクトがwindowになるため、
        // .bindでScrollObserverクラスを参照するよう指定する
        this.io = new IntersectionObserver(callback.bind(this), this.options);

        // @see https://github.com/w3c/IntersectionObserver/tree/master/polyfill
        this.io.POLL_INTERVAL = 100;
        
        // thisを付属し、コンストラクタの中で取得した書きのコードをのelsを参照可能にする
        // this.els = document.querySelectorAll(els);
        this.els.forEach(el => this.io.observe(el));
    }

    destroy() {
        this.io.disconnect();
    }
}