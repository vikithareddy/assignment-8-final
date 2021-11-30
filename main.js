// window.onscroll = function() {scrollFunction()};
 
// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar").style.background = "rgba(255, 255, 255, 0.75)";
//     // document.getElementById("line-change").style.display = "none";
//     // document.getElementById("text-under-name").style.display = "inline-block";
//     $('.navbar').addClass("navbar-hide");
//   } else {
   
//     document.getElementById("navbar").style.background = "none";
//   }
// }

$(window).scroll(function(e) {

    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop();
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $('.navbar').addClass("navbar-hide");
    } else {
        $('.navbar').removeClass("navbar-hide");
    }

});

