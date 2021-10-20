//  モバイルメニューに関するクラス
class MobileMenu {
    // コンストラクター定義
    constructor() {
        // DOMを格納するためのthisを使用したDOMを初期化
        this.DOM = {};
        // DOMのbuttonの中に要素を取得
        this.DOM.btn = document.querySelector('.mobile-menu__btn');
        // DOMのcoverの中に要素を取得
        this.DOM.cover = document.querySelector('.mobile-menu__cover');
        // DOMのcontainerの中に要素を取得
        this.DOM.container = document.querySelector('#global-container');
        // イベント種類判別メソッド呼び出し
        this.eventType = this._getEventType();
        // イベント登録用メソッド呼び出し
        this._addEvent();
    }

    /*  イベントの種類を判別するメソッド
        (touchstartが使用できるかどうかを判定)

        スマホ -> touchstart
        PC    -> click

        URL   -> https://modernizr.com/docs
    */
    _getEventType() {
        const isTouchCapable =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch) ||
          navigator.maxTouchPoints > 0 ||
          window.navigator.msMaxTouchPoints > 0;

          return isTouchCapable ? "touchstart" : "click";
    }

    // menu-openクラスを付与するメソッド
    _toggle() {
        this.DOM.container.classList.toggle('menu-open');
    }

    // イベント登録用メソッド
    _addEvent() {
        // MobileMenuの中のthis.DOMにアクセスしているため、bind使用
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
    }

}

new MobileMenu();