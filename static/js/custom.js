// header on scroll
$(window).on('scroll', function (event) {
  var scrollValue = $(window).scrollTop();
  if (scrollValue > 60) {
      $('.main-header').addClass('fixed-top');
  } else{
      $('.main-header').removeClass('fixed-top');
  }
});

// alert on footer
$(window).on('scroll', function (event) {
  var scrollValue = $(window).scrollTop();
  if (scrollValue > 240) {
      $('.custom-alert').addClass('shows');
  }
});


// add class to body for need help button
$(window).on('scroll', function (event) {
  var scrollValue = $(window).scrollTop();
  if (scrollValue > 680) {
      $('body').addClass('scroll-added');
  } else{
      $('body').removeClass('scroll-added');
  }
});

// slider on footer timer
$('.carousel').carousel({
  interval: 4000
})

// When the user clicks on the button, scroll to the top of the document
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 420 || document.documentElement.scrollTop > 420) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
