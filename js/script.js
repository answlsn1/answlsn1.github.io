$(document).ready(function(){

    
    // 위로가기 기능
    $('.gotop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        });
    });


    // main-menu
    let header = $('.header');
    $(window).scroll(function () {
        let scroll_header = $(window).scrollTop();
        if (scroll_header > 0) {
            header.addClass('header-active');
        } else {
            header.removeClass('header-active');
        }
    });

    // 영역별 스크롤이동
    $('.menu1').click(function(){
        $('html').stop().animate({scrollTop : 0}, 500);
    });

    $('.menu2').click(function(){
        var position = $('#profile').offset();
        $('html').stop().animate({scrollTop : position.top - 50}, 500);
    });

    $('.menu3').click(function(){
        var position = $('#redesign').offset();
        $('html').stop().animate({scrollTop : position.top - 70}, 500);
    });
    
    $('.menu4').click(function(){
        var position = $('#publishing').offset();
        $('html').stop().animate({scrollTop : position.top - 70}, 500);
    });
    
    $('.menu5').click(function(){
        var position = $('#more-design').offset();
        $('html').stop().animate({scrollTop : position.top - 70}, 500);
    });

    $('.menu6').click(function(){
        var position = $('#life').offset();
        $('html').stop().animate({scrollTop : position.top - 250}, 500);
    });
    
    $('.menu7').click(function(){
        var position = $('#contact').offset();
        $('html').stop().animate({scrollTop : position.top}, 500);
    });




    // visual
    let visual_img = $('.visual img');

    visual_img.css({
        opacity: 0,
        'margin-top': '-1%'
    });
    visual_img.stop().animate({
        opacity: 1,
        'margin-top': '0%'
    }, 1000);

    // Profile

    $('.pro-left-2').waypoint(function (dir) {
        $('.pro-left-2').css({
            opacity: 0,
            'transition':'all 1.5s' 
        });
        if (dir == "down") {
            $('.pro-left-2').stop().css({
                opacity: 1,
            });
        }
    }, {
        offset: '80%'
    });

    $('.pro-left-3').waypoint(function (dir) {
        $('.pro-left-3').css({
            opacity: 0,
            'transition':'all 2s' 
        });
        if (dir == "down") {
            $('.pro-left-3').stop().css({
                opacity: 1,
            });
        }
    }, {
        offset: '90%'
    });

    $('.pro-right-3').waypoint(function (dir) {
        $('.pro-right-3').css({
            opacity: 0,
            'transition':'all 2s' 
        });
        if (dir == "down") {
            $('.pro-right-3').stop().css({
                opacity: 1,
            });
        }
    }, {
        offset: '80%'
    });

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


    // redesign

    $('.rede-title').waypoint(function (dir) {
        $('.rede-title').css({
            opacity: 0,
            'margin-left':'-15%',
            'transition':'all 0.7s' 
        });
        if (dir == "down") {
            $('.rede-title').css({
                opacity: 1,
                'margin-left':'0%'
            });
        }
    }, {
        offset: '80%'
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

    $('.publ-title').waypoint(function (dir) {
        $('.publ-title').css({
            opacity: 0,
            'margin-left':'-15%',
            'transition':'all 0.7s' 
        });
        if (dir == "down") {
            $('.publ-title').css({
                opacity: 1,
                'margin-left':'0%'
            });
        }
    }, {
        offset: '80%'
    });

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
    
    // life
    $('.life-title').waypoint(function (dir) {
        $('.life-title').css({
            opacity: 0,
            'margin-left':'-15%',
            'transition':'all 0.7s' 
        });
        if (dir == "down") {
            $('.life-title').css({
                opacity: 1,
                'margin-left':'0%'
            });
        }
    }, {
        offset: '80%'
    });

    $('.life1').waypoint(function (dir) {
        $('.life1').css({
            opacity: 0,
            'transform':'rotate(5deg)',
        });
        if (dir == "down") {
            $('.life1').css({
                opacity: 1,
                'transform':'rotate(0deg)'
            });
        }
    }, {
        offset: '60%'
    });

    $('.life2').waypoint(function (dir) {
        $('.life2').css({
            opacity: 0,
            'transform':'rotate(5deg)',
        });
        if (dir == "down") {
            $('.life2').css({
                opacity: 1,
                'transform':'rotate(0deg)'
            });
        }
    }, {
        offset: '60%'
    });

    $('.life3').waypoint(function (dir) {
        $('.life3').css({
            opacity: 0,
            'transform':'rotate(5deg)',
        });
        if (dir == "down") {
            $('.life3').css({
                opacity: 1,
                'transform':'rotate(0deg)'
            });
        }
    }, {
        offset: '60%'
    });

    // contact
    $('.cont-title').waypoint(function (dir) {
        $('.cont-title').css({
            opacity: 0,
            'margin-left':'-15%',
            'transition':'all 0.7s' 
        });
        if (dir == "down") {
            $('.cont-title').css({
                opacity: 1,
                'margin-left':'0%'
            });
        }
    }, {
        offset: '80%'
    });
});
