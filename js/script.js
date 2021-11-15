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
});