$(document).ready(function() {
    const $carousel = $('#carousel');
    const $carouselContainer = $('#carousel-container');

    $('.next').on('click', function() {
      $carousel.animate({marginLeft: '-=100%'}, 500, function() {
        $carousel.append($carousel.find('.carousel-item:first-child'));
        $carousel.css('margin-left', 0);
      });
    });

    $('.prev').on('click', function() {
      $carousel.prepend($carousel.find('.carousel-item:last-child'));
      $carousel.css('margin-left', '-100%');
      $carousel.animate({marginLeft: '+=100%'}, 500);
    });
  });