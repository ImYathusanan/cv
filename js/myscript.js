//---- My Scripting order --------
/*
1.Pre-loader
2.Smooth scrolling
3.Skill bar animation
4.Navigation bar animation
5.Back to top button
6.Navigation Menu
*/
//--------------------------------

//On loading functions start
$(function() {

  //pre-loader
  $(".pre-loader").delay(4000).fadeOut("slow");
  $("#overlayer").delay(4000).fadeOut("slow");

  //Smooth scrolling
  $("html, body").niceScroll({
    cursorborderradius: 0,
    cursorcolor: "#05050d",
    cursorborderradius: 5,
    scrollspeed: 40,
    mousescrollstep: 30,
    zindex: 9999,
    cursorwidth: 9,
    cursorborder: false
  });

  //Animate Skill bar while appear of skills section animation
  $('#skills').appear( function () {
    $('.bar').each(function() {
      $(this).find('.bar-inner').animate({
        width: $(this).attr('data-width')
      }, 3000);
    });
  });

  // Navigation bar animation
    let navbar = $('.navbar');
    
    $(window).scroll(function(){
      if($(window).scrollTop() <= 300){
        navbar.removeClass('navbar-scroll-down');
      } else {
        navbar.addClass('navbar-scroll-down');
      }
    });

    //Handle Back to top button appear 
    var btn = $('#button-top');
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    //Going top on clicking
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });

}); //Onloading function ends


//Navigation menu
$("#hamburg").click(function(){
  $("#myNav").css("width", "100%");
});

$("#closeNav, .close-me").click(function(){
  $("#myNav").css("width", "0%");
});





   
