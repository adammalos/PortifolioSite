$(document).ready(function(){
  var myCarousel = document.querySelector('#carouselExample');
  var hammer = new Hammer(myCarousel);
  
  hammer.on('swipeleft', function(){
    $('#carouselExample').carousel('next');
  });
  
  hammer.on('swiperight', function(){
    $('#carouselExample').carousel('prev');
  });
});


