// (($, Drupal) => {
//   Drupal.behaviors.chip = {
//     attach(context) {
//       context.querySelectorAll('.slider').forEach((slider) => {
//         slider.slick()
//       });
//     },
//   };
// })(jQuery, Drupal);

(function ($, Drupal, drupalSettings, once) {
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
})(jQuery, Drupal, drupalSettings, once);
