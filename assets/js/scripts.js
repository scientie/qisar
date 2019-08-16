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
    var $videoSrc;
    $('.video-btn').click(function () {
        $videoSrc = "https://www.youtube.com/embed/RkQzRUBBSVQ";
    });
    $('.videoBackground').on('shown', function (e) {

        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', "https://www.youtube.com/embed/RkQzRUBBSVQ?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    });
    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide', function (e) {
        // a poor man's stop video
        $("#video").attr('src', $videoSrc);
    });
});