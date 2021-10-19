document.addEventListener('DOMContentLoaded', function () {

    // コールバック関数を定義
    // 第１引数 -> 要素
    // 第２引数 -> isIntersecting
    const cb = function(el, isIntersecting) {
        
        // isIntersectingがtrueの場合　
        if (isIntersecting) {
            const ta = new TextAnimation(el);
            ta.animate();
        }
    }

    const so = new ScrollObserver('.animate-title', cb);
});

