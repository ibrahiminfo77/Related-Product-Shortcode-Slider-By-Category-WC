(function($) {
    "use strict";

    jQuery(document).ready(function($) {


        jQuery("#relatedShop").owlCarousel({
            items: 3,
            dots: true,
            autoplay: false,
            autoplayTimeout: 10000,
            nav: false,
            // center: true,
            navText: ['', ''],
            fluidSpeed: 1000,
            smartSpeed: 800,
            loop: true,
            margin: 20,
            responsive:{
                0:{
                    items:1,
                },
                767:{
                    items:2,
                    stagePadding: 90
                },
                1200:{
                    items:2,
                    stagePadding: 100
                },

                1330:{
                    items:3,
                    stagePadding: 110,
                },

                1405:{
                    items:3,
                    stagePadding: 110,
                }
            }
        });
    
    });

    jQuery(window).load(function() {
        


    });

}(jQuery));