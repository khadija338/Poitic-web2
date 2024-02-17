(function ($) {
	"use strict";
    $('.counter').counterUp({
		delay: 10,
		time: 1000
	});

   

var swiper = new Swiper(".home1-banner-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    slidesPerView: 1,
    centerSlides: true,
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 3000, // Autoplay duration in milliseconds
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".next-1",
        prevEl: ".prev-1",
    },
    pagination: {
        el: ".paginations111",
        clickable: true,
    },
});

new WOW().init();

}(jQuery));