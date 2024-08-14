const swiper = new Swiper('.swiper-container', {
  /* lazy: true, */
  speed: 800,

  loop: true,
  slidesPerView: 1,

  autoplay: {
    delay: 5000,
  },

  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },

  effect: 'coverflow',
  fadeEffect: {
    depth: 150,
  },

  on: {
    slideChange: function () {
      const currentSlide = this.slides[this.activeIndex];
      const textPartElement = currentSlide.querySelector(
        '.hero-section__text-part'
      );
      const overlayElement = document.querySelector('.overlay');

      const textPartWidth = textPartElement.offsetWidth;
      const textPartHeight = textPartElement.offsetHeight;

      overlayElement.style.width = `${textPartWidth}px`;
      overlayElement.style.height = `${textPartHeight}px`;
    },
  },
});
