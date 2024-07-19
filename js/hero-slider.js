const swiper = new Swiper('.swiper-container', {
  /*  lazy: {
    loadPrevNext: false,
    loadOnTransitionStart: false,
  }, */
  loop: true,
  slidesPerView: 1,
  //autoplay: {
  // delay: 5000, // auto-slide every 5 seconds
  //disableOnInteraction: true, // pause autoplay when user interacts with the slider
  //},
  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },
});
