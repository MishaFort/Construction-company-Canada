const overlayButton = document.querySelector('.hero-section__overlay-button');
const readMoreButton = document.querySelector(
  '.hero-section__read-more-button'
);
const readMoreButtonSecond = document.querySelector(
  '.hero-section__read-more-button--second'
);

let timeoutId = null;

overlayButton.addEventListener('mouseover', () => {
  timeoutId = setTimeout(() => {
    readMoreButton.style.opacity = 0.5;
  }, 100);
  timeoutId = setTimeout(() => {
    readMoreButtonSecond.style.opacity = 0.5;
  }, 100);
});

overlayButton.addEventListener('mouseout', () => {
  clearTimeout(timeoutId);
  readMoreButton.style.opacity = 1;
  readMoreButtonSecond.style.opacity = 1;
});

overlayButton.addEventListener('click', () => {
  window.location.href = '/#projects-section';
});
