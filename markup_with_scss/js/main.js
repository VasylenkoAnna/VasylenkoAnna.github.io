$(document).ready(function(){
  $(".carousel_none").owlCarousel({
    stagePadding: 0,
    slideBy : 1,
    loop:true,
    nav:true,
    navText : ["",""],
    responsive:{
        0:{
            items:1
        },
       
        1000:{
            items:1
        }
    }
}); 
});









