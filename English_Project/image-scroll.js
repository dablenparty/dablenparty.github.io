$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $(".title-image").css({
        transform: 'translate3d(-50%, -' + (scroll / 100) + '%, 0) scale(' + (100 + scroll / 15) / 100 + ')',
        width: (39 + scroll / 15) + "%",
        top: -(scroll / 10) + "%",
        filter: 'blur(' + scroll / 30 + 'px)',
    });
});
