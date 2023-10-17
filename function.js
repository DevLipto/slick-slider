$(document).ready(function(){
    $('.slick-wrapper').slick({

     // normal options...
  infinite: true,
  slidesToShow: 3,
  dots: true,
  slidesToScroll: 1,
  autoplay: true, 
  autoplaySpeed: 2000,

  // the magic
  responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true,
        dots: true,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,
      }

    }, {

      breakpoint: 300,
      settings: "unslick",
      dots: true, 
      slidesToScroll: 1,
      autoplay: true, 
      autoplaySpeed: 2000,

    }]
  });

  });