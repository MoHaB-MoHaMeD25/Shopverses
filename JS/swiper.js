    var swiper1 = new Swiper(".slide-swp", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullests: true,
        clickable: true
    },
    autoplay:{
        delay:2500,
    },
    loop:true
    });


/* swiper slide products */

    var hotSwiper = new Swiper(".hot_swiper", {
        slidesPerView: 5,
        spaceBetween: 20,
    pagination: {
        el: ".pagination_hot",
        dynamicBullets: true,
        clickable: true
    },
    autoplay:{
        delay:2500,
    },
    navigation:{
        nextEl:".hot_next",
        prevEl:".hot_prev"
    },
    loop:true
    });



    var elecSwiper  = new Swiper(".elec_swiper", {
        slidesPerView: 5,
        spaceBetween: 20,
    pagination: {
        el: ".pagination_elec",
        dynamicBullets: true,
        clickable: true
    },
    autoplay:{
        delay:2500,
    },
    navigation:{
        nextEl:".elec_next",
        prevEl:".elec_prev"
    },
    loop:true
    });



    var applSwiper  = new Swiper(".appl_swiper", {
        slidesPerView: 5,
        spaceBetween: 20,
    pagination: {
        el: ".pagination_appl",
        dynamicBullets: true,
        clickable: true
    },
    autoplay:{
        delay:2500,
    },
    navigation:{
        nextEl:".appl_next",
        prevEl:".appl_prev"
    },
    loop:true
    });



    var mobileSwiper  = new Swiper(".mobile_swiper", {
        slidesPerView: 5,
        spaceBetween: 20,
    pagination: {
        el: ".pagination_mobile",
        dynamicBullets: true,
        clickable: true
    },
    autoplay:{
        delay:2500,
    },
    navigation:{
        nextEl:".mobile_next",
        prevEl:".mobile_prev"
    },
    loop:true
    });



