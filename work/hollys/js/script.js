$(document).ready(function(){
    new Swiper('.sw-vis',{
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    $('.header').hover(function(){
        $('.gnb2').stop().slideToggle();
    });
});