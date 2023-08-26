$(document).ready(function() {
  $('.js-hamburger').click(function() {
    $(this).toggleClass('is-open');
    $(this).find('a').toggleClass('is-open');
    $(this).find('span').toggleClass('is-open');
    $(".p-nav").toggleClass("is-open");
    $(".p-nav").slideToggle(200);
    $('body').toggleClass('is-open');
  });


});
