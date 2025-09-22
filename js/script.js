(function($){
 
    /* Backtop
     ---------------------------------------------------------------*/
    $("#back-top").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn(100);
        } else {
            $('#back-top').fadeOut(100);
        }
    });
    $('#back-top a').click(function () {
        $('body,html').animate( { scrollTop: 0 }, 800 );
        return false;
    });

    /* Mobile Menu
     ---------------------------------------------------------------*/
    $('#showmenu').click(function(){
        $('#mobilenav').toggleClass('opened');
        $('.panel-overlay').toggleClass('active');
        $('.hamburger',this).toggleClass('is-active');
    });

    $('.panel-overlay').click(function(){
        $('#mobilenav').toggleClass('opened');
        $(this).removeClass('active');
        $('#showmenu .hamburger').removeClass('is-active');
    });

    $('.menu_close').click(function(){
        $('#mobilenav').toggleClass('opened');
        $('.panel-overlay').removeClass('active');
        $('#showmenu .hamburger').removeClass('is-active');
    });

    $("#mobilenav ul.sub-menu").before('<span class="arrow"></span>');

    $("body").on('click','#mobilenav .arrow', function(){
        $(this).parent('li').toggleClass('open');
        $(this).parent('li').find('ul.sub-menu').first().slideToggle( "normal" );
    });

    /* Disable autocomplete
     ---------------------------------------------------------------*/
    $('input').attr('autocomplete', 'off');

})(jQuery);

