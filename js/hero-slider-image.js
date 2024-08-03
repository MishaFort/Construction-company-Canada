const setImageSource = () => {
  const viewportWidth = window.innerWidth;
  const imageElements = document.querySelectorAll('.hero-section__image');

  imageElements.forEach((imageElement, index) => {
    if (viewportWidth <= 768) {
      imageElement.src = `./images/hero-slider-${index + 1}-small.avif`;
    } else if (viewportWidth <= 1140) {
      imageElement.src = `./images/hero-slider-${index + 1}-medium.avif`;
    } else {
      imageElement.src = `./images/hero-slider-${index + 1}-large.avif`;
    }
  });
};

window.addEventListener('resize', setImageSource);

setImageSource();
