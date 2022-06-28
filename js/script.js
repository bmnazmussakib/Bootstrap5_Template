$(document).ready(function(){
    

    var owl = $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        dots:false
    });

   
    

    $(function () {
        if ($('.accordion-list').length) {
          $('.accordion-list').on('click', '.accordion-title', function (e) {
            e.preventDefault();
            // remove siblings activities
            $(this).closest('.accordion-list-item').siblings().removeClass('open').find('.accordion-desc').slideUp();
            $(this).closest('.accordion-list-item').siblings().find('.ni').addClass('ni-plus').removeClass('ni-minus');
      
            // add slideToggle into this
            $(this).closest('.accordion-list-item').toggleClass('open').find('.accordion-desc').slideToggle();
            $(this).find('.ni').toggleClass('ni-plus ni-minus');

            // add border-bottom to title
            $(this).toggleClass('accordion-title-border');

            
          });
          
        }
      });

  });

  