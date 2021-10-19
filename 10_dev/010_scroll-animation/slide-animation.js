document.addEventListener('DOMContentLoaded', function () {

    const cb = function (el, isIntersecting) {
        if(isIntersecting) {

            // 要素にclassを付与
            el.classList.add('inview');
        }
    } 　


    const so = new ScrollObserver('.cover-slide', cb);
});

