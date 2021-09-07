
$(document).ready(function(){
  $('.single-item').slick({
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
    prevArrow:'<img class="arrow prevarrow" src="img/icons/prev.svg" alt="prevarrow">',
    nextArrow:'<img src="img/icons/next.svg" alt="nextarrow" class="arrow nextarrow">'
  });
});