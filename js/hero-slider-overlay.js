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

/* overlayButton.addEventListener('click', () => {
  window.location.href = '/#projects-section';
}); */

//and this one delete maybe (хотя тут страница а не url)

/* overlayButton.addEventListener('click', () => {
  const currentPage = window.location.pathname;
  let href = '';

  if (currentPage === '/index.html') {
    href = '#projects-section';
  } else {
    href = '/#projects-section';
  }

  window.location.href = href;
}); */

//delete this bullshit later

overlayButton.addEventListener('click', () => {
  const currentPage = window.location.pathname;
  const currentUrl = window.location.href;
  let href = '';

  if (currentPage === '/index.html') {
    href = '#projects-section';
  } else if (
    currentUrl === 'https://mishafort.github.io/Construction-company-Canada/' ||
    currentUrl ===
      'https://mishafort.github.io/Construction-company-Canada/#projects-section'
  ) {
    href =
      'https://mishafort.github.io/Construction-company-Canada/#projects-section';
  } else {
    href = '/#projects-section';
  }

  window.location.href = href;
});

///
