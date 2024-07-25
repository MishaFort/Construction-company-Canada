/* const overlay = document.querySelector('.overlay');
const textPart = document.querySelector('.hero-section__text-part');

// Function to set overlay styles
function setOverlayStyles() {
  const textPartRect = textPart.getBoundingClientRect();
  overlay.style.width = `${textPartRect.width}px`;
  overlay.style.height = `${textPartRect.height}px`;
}

// Call the function on page load
setOverlayStyles(); */

const swiper = new Swiper('.swiper-container', {
  /*  lazy: {
    loadPrevNext: false,
    loadOnTransitionStart: false,
  }, */
  loop: true,
  slidesPerView: 1,

  /*   on: {
    slideChange: () => {
      setOverlayStyles();
    },
  }, */

  /*  autoplay: {
    delay: 5000, // auto-slide every 5 seconds
    disableOnInteraction: true, // pause autoplay when user interacts with the slider
  }, */
  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },

  effect: 'coverflow',
  fadeEffect: {
    depth: 150,
  },

  /*   effect: 'flip', */
});

/* setTimeout(() => {
  swiper.wrapper.classList.add('swiper-initialized');
}, 300); // Delay by 300ms
 */
