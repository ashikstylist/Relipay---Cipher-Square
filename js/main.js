$(document).ready(function () {

  // Exclusive Carousel
  $(".owl-carousel-exclusive").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: false,
      },
      600: {
        items: 2,
        nav: false,
        loop: false,
      },
      991: {
        items: 3,
        nav: false,
        loop: false,
      },
    },
  });
  $('.exclusive-prev').click(function() {
    $(".owl-carousel-exclusive").trigger('prev.owl.carousel');
  })
  $('.exclusive-next').click(function() {
    $(".owl-carousel-exclusive").trigger('next.owl.carousel');
  })


  // Travel Section Carousel

  $(".owl-carousel-travel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: false,
      },
      600: {
        items: 2,
        nav: false,
        loop: false,
      },
      991: {
        items: 4,
        nav: false,
        loop: false,
      },
    },
  });
  $('.travel-prev').click(function() {
    $(".owl-carousel-travel").trigger('prev.owl.carousel');
  })
  $('.travel-next').click(function() {
    $(".owl-carousel-travel").trigger('next.owl.carousel');
  })



  // Toggle Dashboard Card
  $(".dash-card-toggle").click(function () {
    $(".dash-card-toggle").removeClass("dash-card-toggle-active");
    $(this).toggleClass("dash-card-toggle-active");
  });

  // Offer Tabs
  $(".ex-off-tab").click(function () {
    $(".ex-off-tab").removeClass("ex-off-tab-active");
    $(this).toggleClass("ex-off-tab-active");
  });
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  alert("Promocode Copied to Clipboard!");
}
