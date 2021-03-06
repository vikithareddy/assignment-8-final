//function to handle responsiveness and animations on scroll
$(window).scroll(function(e) {

    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop();
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $('.navbar').addClass("navbar-hide");
        document.getElementById("navbar").style.background = "rgba(255, 255, 255, 0.75)";
    } else {
        $('.navbar').removeClass("navbar-hide");
        document.getElementById("navbar").style.background = "rgba(255, 255, 255, 0.75)";
    }

});

//change layout of items based on screen resizing 
$(function(){
    $(window).bind("resize",function(){
        console.log($(this).width());
        if($(this).width() <800){
        $('.desc-timeline-div').removeClass('flex-nowrap');
        $('.remove-offset').removeClass('offset-2');
        $('#spin').removeClass('flex-nowrap');
        $('#spin').show();
        $('#rebox').removeClass('flex-nowrap');
        $('#rebox').show();
        } else {
        $('.desc-timeline-div').addClass('flex-nowrap');
        $('.remove-offset').addClass('offset-2');
        $('#spin').removeAttr("style").hide();
        $('#rebox').removeAttr("style").hide();
        };
    });
    });


    


    var hamburger = document.getElementById("navbar-toggler");
    //set architecture projects nav bar display off if the hamburger menu is expanded
    hamburger.onclick = function () {
      console.log('Click just happened')
      document.getElementById("architecture-nav").style.display = "none";
    }




