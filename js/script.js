$(document).ready(function(){

    var photoshop = new ProgressBar.Line(skill_photoshop, {
        strokeWidth:4,
        easing: 'easeInOut',
        duration: 1400,
        color:'#ff0000',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: "#000"
        },
        to: {
            color: "#000"
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    var illustrator = new ProgressBar.Line(skill_illustrator, {
        strokeWidth:4,
        easing: 'easeInOut',
        duration: 1400,
        color:'#ff0000',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: "#000"
        },
        to: {
            color: "#000"
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });
    
    var adobe_xd = new ProgressBar.Line(skill_adobe_xd, {
        strokeWidth:4,
        easing: 'easeInOut',
        duration: 1400,
        color:'#ff0000',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: "#000"
        },
        to: {
            color: "#000"
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    var html = new ProgressBar.Circle(skill_html, {
        color:'#000',
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color:'#aaa'
        },
        to: {
            color:'#333',
            width: 4
        },
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if(value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }
        }
    });

    var css = new ProgressBar.Circle(skill_css, {
        color:'#000',
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color:'#aaa'
        },
        to: {
            color:'#333',
            width: 4
        },
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if(value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }
        }
    });

    var jquery = new ProgressBar.Circle(skill_jquery, {
        color:'#000',
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color:'#aaa'
        },
        to: {
            color:'#333',
            width: 4
        },
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if(value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }
        }
    });

    var sc_y = $(window).scrollTop();
    $(window).scroll(function(){

        sc_y = $(window).scrollTop();

        if(sc_y >= 100) {
            photoshop.animate(0.9);
            illustrator.animate(0.7);
            adobe_xd.animate(0.8);
            html.animate(1);
            css.animate(0.9);
            jquery.animate(0.8);
        }
    });

    let rede_text = $('.rede-text');

    new Swiper('.sw-rede', {
        effect: 'fade',
        navigation: {
            nextEl: ".sw-rede-next",
            prevEl: ".sw-rede-prev",
        },
        speed: 1000,
        on: {
            slideChange: function () {

                if (!rede_text) {
                    rede_text = $('.rede-text');
                }

                // this.activeIndex : 활성화 되어야 할 슬라이드
                rede_text.eq(this.activeIndex).css({
                    opacity: 0,
                    'margin-left': '-3%'
                });
                rede_text.eq(this.activeIndex).stop().animate({
                    opacity: 1,
                    'margin-left': '0%'
                }, 800);

                // this.previousIndex : 보였었던 슬라이드
                rede_text.eq(this.previousIndex).stop().animate({
                    opacity: 0
                }, 300);

                // 마치 클릭이 되었을 때의 index 처럼
                // 실제 html 코딩의 순서 값이 넘어온다.
                // console.log(this.realIndex);               
            }
        },
    });


    // publishing
    let publ_box = $('.publ-box');
    let publ_btn = $('.publ-btn');

        
    $('.publ-2 > .publ-btn').hide();
    $('.publ-3 > .publ-btn').hide();
    $('.publ-4 > .publ-btn').hide();

    publ_box.eq(0).click(function(){
        publ_box.eq(0).addClass('publ-wide');
        publ_box.eq(1).addClass('publ-close');
        publ_box.eq(2).addClass('publ-close');
        publ_box.eq(3).addClass('publ-close');

        publ_box.eq(0).removeClass('publ-close');
        publ_box.eq(1).removeClass('publ-wide');
        publ_box.eq(2).removeClass('publ-wide');
        publ_box.eq(3).removeClass('publ-wide');

        $('.publ-1 > .publ-btn').show();
        $('.publ-2 > .publ-btn').fadeOut();
        $('.publ-3 > .publ-btn').fadeOut();
        $('.publ-4 > .publ-btn').fadeOut();
    });
    publ_box.eq(1).click(function(){
        publ_box.eq(0).addClass('publ-close');
        publ_box.eq(1).addClass('publ-wide');
        publ_box.eq(2).addClass('publ-close');
        publ_box.eq(3).addClass('publ-close');
        
        publ_box.eq(0).removeClass('publ-wide');
        publ_box.eq(1).removeClass('publ-close');
        publ_box.eq(2).removeClass('publ-wide');
        publ_box.eq(3).removeClass('publ-wide');
        
        $('.publ-1 > .publ-btn').fadeOut();
        $('.publ-2 > .publ-btn').show();
        $('.publ-3 > .publ-btn').fadeOut();
        $('.publ-4 > .publ-btn').fadeOut();
    });

    publ_box.eq(2).click(function(){
        publ_box.eq(0).addClass('publ-close');
        publ_box.eq(1).addClass('publ-close');
        publ_box.eq(2).addClass('publ-wide');
        publ_box.eq(3).addClass('publ-close');
        
        publ_box.eq(0).removeClass('publ-wide');
        publ_box.eq(1).removeClass('publ-wide');
        publ_box.eq(2).removeClass('publ-close');
        publ_box.eq(3).removeClass('publ-wide');
        
        $('.publ-1 > .publ-btn').fadeOut();
        $('.publ-2 > .publ-btn').fadeOut();
        $('.publ-3 > .publ-btn').show();
        $('.publ-4 > .publ-btn').fadeOut();
    });

    publ_box.eq(3).click(function(){
        publ_box.eq(0).addClass('publ-close');
        publ_box.eq(1).addClass('publ-close');
        publ_box.eq(2).addClass('publ-close');
        publ_box.eq(3).addClass('publ-wide');
        
        publ_box.eq(0).removeClass('publ-wide');
        publ_box.eq(1).removeClass('publ-wide');
        publ_box.eq(2).removeClass('publ-wide');
        publ_box.eq(3).removeClass('publ-close');
        
        $('.publ-1 > .publ-btn').fadeOut();
        $('.publ-2 > .publ-btn').fadeOut();
        $('.publ-3 > .publ-btn').fadeOut();
        $('.publ-4 > .publ-btn').show();
    });
});
