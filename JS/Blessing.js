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


$(window).scroll(function () {
  var windowBottom = $(this).scrollTop() + $(this).innerHeight();
  $(".fade").each(function () {
    /* Check the location of each desired element */
    var objectBottom = $(this).offset().top + $(this).outerHeight();

    /* If the element is completely within bounds of the window, fade it in */
    if (objectBottom < windowBottom) { // (scrolling bawah)
      if ($(this).css("opacity") == 0) {
        $(this).css( "30%"); // Set radius di sini
        $(this).fadeTo(200, 1);
      }
    } else { // (scroll atas)
      if ($(this).css("opacity") == 1) {
        $(this).fadeTo(200, 0);
      }
    }
  });
}).scroll(); //invoke scroll-handler on page-load


$("button").click(function(){
  window.location.replace("mawar.html");
});
