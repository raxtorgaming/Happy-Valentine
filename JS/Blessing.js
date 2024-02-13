var song = document.getElementById("audio");
song.volume = 0.1;
song.currentTime = 67.5;

setTimeout(function(){
    song.play();

    setTimeout(function(){
      song.pause();
      song.currentTime = 67.5;
    }, 2000);
}, 14200);


$(window).on("load", function () {
  var previousScrollTop = 0; // variable to store the previous scroll position
  $(window).scroll(function () {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function () {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();

      /* If the element is completely within bounds of the window, fade it in or out based on scroll direction */
      if (objectBottom < windowBottom) { // (scrolling bawah)
        if ($(this).css("opacity") == 0) {
          $(this).fadeTo(200, 1);
        }
      } else { // (scroll atas)
        if ($(this).css("opacity") == 1) {
          $(this).fadeTo(200, 0);
        }
      }
    });

    // check if the user is scrolling up or down
    var currentScrollTop = $(this).scrollTop();
    if (currentScrollTop > previousScrollTop) { // scrolling down
      // do something for scrolling down
    } else { // scrolling up
      // do something for scrolling up
      $(".fade").each(function () {
        if ($(this).css("opacity") == 1) {
          $(this).fadeTo(200, 0);
        }
      });
    }
    previousScrollTop = currentScrollTop; // update the previous scroll position
  }).scroll(); //invoke scroll-handler on page-load
});


$("button").click(function(){
  window.location.replace("mawar.html");
});