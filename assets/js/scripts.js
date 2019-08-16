$(function(){
    $(window).scroll(function(){
        var height = $(window).scrollTop();
        if(height > 30) {
            $( ".navbar" ).addClass( "scroll" );
        }else{
            $( ".navbar" ).removeClass( "scroll" );
        }
    });
    $('.navbar-toggler').on('click', function() {
        $('.navbar-collapse').toggleClass('show');
      });
  });