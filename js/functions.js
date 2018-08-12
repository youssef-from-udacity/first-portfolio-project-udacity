(function($) {
    var firstAppear = true;
    var wScroll;

    function myNamePosition() {
        var windowWidth = $(this).width();
        wScroll = $(this).scrollTop();
        if (windowWidth > 630) {
            $('#myName').css({
                'transform': 'translate(' + (windowWidth / 3) + 'px, ' + wScroll / 2.5 + '%)',
                'opacity': '1'
            })
        } else {
            $('#myName').css({
                'transform': 'translate(0px, ' + wScroll / 2.5 + '%)',
                'opacity': '1'
            })
        };
    }
    // this function change the position of myName and set animation to featured-work for first apper
    function whenFirstAppearl() {
        myNamePosition();
        if (firstAppear) {
            if (wScroll > $('.featured-work').offset().top - ($(window).height() / 1.3)) {
                firstAppear = false;
                $('.featured-work figure').each(function(i) {
                    setTimeout(function() {
                        $('.featured-work figure').eq(i).addClass('is-showing');
                    }, 150 * (i + 1));
                });
            }
        }
    }
    myNamePosition();

    $(window).on('resize scroll', whenFirstAppearl);
    // scroll to element
    function elementScroll() {
        var offset = $('#navbarHeader').height();
        var element = $($(this).attr('href')).offset().top - offset;
        $('body').animate({
            scrollTop: element
        }, 500);
    }
    $('.navbar li a').click(elementScroll);

    var collapsed = false;
    $("#navbar-toggle").click(function() {
        collapsed ? collapsed = false : collapsed = true;
    })
    //to collapse navbar
    function collapseNavbar(e) {
        if (collapsed) {
            collapsed = false;
            $('#navbar-collapse').collapse('hide');
        }
    }
    $("#content").click(collapseNavbar);
})(this.jQuery);
