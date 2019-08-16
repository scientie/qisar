$(function () {
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 30) {
            $(".navbar").addClass("scroll");
        } else {
            $(".navbar").removeClass("scroll");
        }
    });
    $('.navbar-toggler').on('click', function () {
        $('.navbar-collapse').toggleClass('show');
    });
    $('.videoBackground').click(function () {
        var src = 'https://www.youtube.com/embed/RkQzRUBBSVQ';
        $('#videoBackground').modal('show');
        $('#videoBackground iframe').attr('src', src);
    });

    $('#videoModal button').click(function () {
        $('#videoModal iframe').removeAttr('src');
    });
});