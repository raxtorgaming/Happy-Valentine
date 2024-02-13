// shows hint when hover
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})



// checks if the password is correct
document.querySelector("button").addEventListener("click", function() {
  var password = document.querySelector('input').value;
  if (password === "16022021") {
    window.location.replace("ConnectionPage.html");
  } else {
    var rndNamber = Math.floor(Math.random() * 3) + 1;
    switch (rndNamber) {
      case 1:
        alert("Yahh,Masa gatau");
        break;
      case 2:
        alert("Aku pertama chat kamu di Instagram loh");
        break;
      case 3:
        alert("Nyerah nihh?? Chat aku aja nanti aku kasih tau jawabanya hehe");
        break;
    }

  }
});
