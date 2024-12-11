/**
 * @file
 * slider.js
 */

(function ($, Drupal, once) {
  Drupal.behaviors.carousel = {
    attach: function (context, settings) {
      once('carousel', '.slider', context).forEach(function (carousel) {
        const dots = JSON.parse(carousel.getAttribute('data-dots'));
        const arrows = JSON.parse(carousel.getAttribute('data-arrows'));
        const infinite = JSON.parse(carousel.getAttribute('data-infinite'));
        const fade = JSON.parse(carousel.getAttribute('data-fade'));

        $('.slider').slick({
          dots: dots,
          infinite: infinite,
          fade: fade,
          arrows: arrows,
        });
      });
    }
  };
})(jQuery, Drupal, once);
