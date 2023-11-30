$(document).ready(function(){

    // menu_model_slide
    new Swiper('.sw_menu_model', {
        navigation: {
            nextEl: ".sw-menu-model-next",
            prevEl: ".sw-menu-model-prev"
        },
        pagination: {
            el: ".sw-menu-model-pagi",
            dynamicBullets: true
        },
    });
});
