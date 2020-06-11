
$(document).ready( function () {

  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = $(".mySlides");           
    var dots = $(".dot");            
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }


  $("#dot1").click(function(e) {
    currentSlide(1);
  })

  $("#dot2").click(function(e) {
    currentSlide(2);
  })

  $("#dot3").click(function(e) {
    currentSlide(3);
  })

  $("#btnPrev").click(function (e) {
    plusSlides(-1);
  })

  $("#btnNext").click(function (e) {
    plusSlides(1);
  })

  let interval = setInterval(function () {
    plusSlides(1);
}, 5000);

})