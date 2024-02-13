var lastScrollTop = 0;

$(window).scroll(function () {
  var windowTop = $(this).scrollTop();
  
  if (windowTop > lastScrollTop) { // Jika menggulir ke bawah
    var windowBottom = windowTop + $(window).height();
    $(".fade").each(function () {
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      if (objectBottom < windowBottom) { // Jika elemen berada dalam jendela saat menggulir ke bawah
        if ($(this).css("opacity") == 0) {
          $(this).css( "30%"); // Set radius di sini
          $(this).fadeTo(80, 1);
        }
      }
    });
  }

  lastScrollTop = windowTop;
}).scroll(); //invoke scroll-handler on page-load

$("button").click(function(){
  window.location.replace("mawar.html");
});
