$(function(){    
    $('.mv-slider').slick({
        autoplay:false,
        arrows: true,
        prevArrow: '<button class="slide-arrow prev-arrow">',
        nextArrow: '<button class="slide-arrow next-arrow">',
        dots: false
    });

    $('.scout-slider').slick({
        autoplay:false,//自動再生する
        autoplaySpeed:4000,//自動再生するスピード 4秒
        dots:false,//ドット部分を表示する
        prevArrow: '<button class="slide-arrow prev-arrow">',
        nextArrow: '<button class="slide-arrow next-arrow">',
    });

    $('.test').slick({
    })
});
