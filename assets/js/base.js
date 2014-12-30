$(document).ready(function() {
  $('ul.social-links').addClass('animated fadeInDown');
  $('.eb-intro').addClass('animated fadeInLeft');
  $('.eb-selfie').addClass('animated fadeInRight');

  function scrollSize() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  $(window).on('scroll', function(){
    var shrinkOn = 400,
        header = $('.eb-opening-header'),
        socialLinks = $('.eb-social-links-panel');

    if (scrollSize() > shrinkOn){
      header.addClass('shrink-down');
      socialLinks.addClass('fixed animated fadeInDownBig');
      $('.eb-fixed-logo').fadeIn();
    } else {
      if (header.hasClass('shrink-down')){
        header.removeClass('shrink-down');
        socialLinks.removeClass('fixed animated fadeInDownBig');
        $('.eb-fixed-logo').toggle();
      }
    }
  });

  //$(window).resize(function(){
  //  if ($(".eb-selfie").css("display") === "none" ){
  //
  //  }
  //});
});
