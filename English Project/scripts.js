//Note that this uses jQuery syntax, so errors WILL come up from JSLint

//-----Scrolling picture function-----//
$(window).scroll(function () { //In the browser window, creates a function based upon the scroll of the page
    var scroll = $(window).scrollTop(); //Sets scroll to the distance scrolled from the top of the page
    $(".title-image").css({ //Add to the css of the .title-image class...
        transform: 'translate3d(-50%, -' + (scroll / 100) + '%, 0) scale(' + (100 + scroll / 15) / 100 + ')', //A transform property containing a 3d translate property and scale property
        width: (39 + scroll / 15) + "%", //A width property increasing said property
        top: -(scroll / 10) + "%", //A top property affecting the vertical position
        //filter: 'blur(' + scroll / 65 + 'px)', //A blur filter for coolness factor (sadly, this is laggy. may be removed.)
        //All dynamically shifting in direct correspondance with the scroll value
    });
    if ($(this).scrollTop() > 125) { //If you scroll 125px away from the top...
        $('body').addClass('change-color') //Add the change-color class to the CSS
    } // 125px is approximately right where the text begins on the screen. This method, however, allows for extra flexibility
    if ($(this).scrollTop() < 125) { //If you scroll less than 125px from the top...
        $('body').removeClass('change-color') //Remove the change-color class from the CSS
    }
});
