//  navigation
$( 'body' ).on('click', '.nav-btn',  function( event ){
    $( event.currentTarget ).toggleClass('active');
    $('.nav-menu').toggleClass('active');
    $( 'body' ).toggleClass('no-scroll');
    return false;
    });
    
    $( window ).on('resize.myTemplate', function(){
    $('body')[ ( $(this).width() <= 767 ) ? 'addClass' : 'removeClass' ]('isMobile')
    }).trigger( 'resize.myTemplate' );
    
    // trust pilot carousal
$('.owl-carousel.trust-pilot-carousal').owlCarousel({
    loop:true,
    margin:30,
    dots:true,
    nav:true,
    responsive:{
        0:{
            items:1,
            stagePadding: 60
        },
        
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})    
$('.owl-carousel.cutomer-about-slider').owlCarousel({
    items: 1,
    dots: true,
    loop: true,
    center: true,
    nav:false,
    margin: 0,
    URLhashListener: true,
    // autoplayHoverPause: true,
    startPosition: 'URLHash'
});
   
   
   
$('.owl-carousel.feature-carousal').owlCarousel({
    loop: false,
    margin: 7,
    nav: false,
    dots:false,
    responsive: {
        0: {
            items: 3,
            loop: true,
        },
        600: {
            items: 3,
            loop: true,
        },
        800: {
            items: 4
        },
        1000: {
            items: 7
        }
    }
})



$('[data-fancybox]').fancybox({
	toolbar  : false,
	smallBtn : true,
    iframe : {
        preload : false
    }
});

 $(document).ready(function(){
    $('.form-btn').click(function(){
        $('.popup-1').hide();
        $('.popup-2').show();
    });
});


$(document).ready(function(){
    $('.email-field').click(function(){
        $('.pasword-field').show();
    });
});






   
 
