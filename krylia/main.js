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




$(document).ready(function(){
$('.portfolio_carousel').owlCarousel({
    loop:true,
    margin:-10,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        1000:{
            items:3
        }
    }
}); 
});

$(document).ready(function(){
$('.partners_carousel').owlCarousel({
    loop:true,
    margin:120,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        760:{
            items:3
        },
       
        1000:{
            items:4
        }
    }
}); 
});







