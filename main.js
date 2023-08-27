$(document).ready(function() {
  $('.js-hamburger').click(function() {
    $(this).toggleClass('is-open');
    $(this).find('a').toggleClass('is-open');
    $(this).find('span').toggleClass('is-open');
    $(".p-nav").toggleClass("is-open");
    $(".p-nav").slideToggle(200);
    $('body').toggleClass('is-open');
  });


  $(".p-menu .p-menu-item").hover(function() {
    if ($(this).find(".p-submenu").length) {
      $(this).find(".p-submenu").slideToggle();
      $(this).find(".second-span").toggleClass("is-open");
    }
  });
});
