/* const heroTextPart = document.querySelectorAll('.hero-section__text-part');

heroTextPart.forEach((textPart, index) => {
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  textPart.parentElement.insertBefore(overlay, textPart);

  const observer = new ResizeObserver(entries => {
    overlay.style.height = `${textPart.offsetHeight}px`;
    overlay.style.width = `${textPart.offsetWidth}px`;

    overlay.style.top = `${textPart.offsetTop}px`;  
    overlay.style.left = `${textPart.offsetLeft}px`;
  });

  observer.observe(textPart);
}); */

/* const heroTextPart = document.querySelectorAll('.hero-section__text-part');

heroTextPart.forEach((textPart, index) => {
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  // Add the overlay to the DOM, e.g. append it to the textPart element
  // textPart.appendChild(overlay);
  textPart.parentElement.insertBefore(overlay, textPart);

  const observer = new ResizeObserver(entries => {
    overlay.style.height = `${textPart.offsetHeight}px`;
    overlay.style.width = `${textPart.offsetWidth}px`;

    overlay.style.top = `${textPart.offsetTop}px`;
    overlay.style.left = `${textPart.offsetLeft}px`;
  });

  observer.observe(textPart);

  overlay.addEventListener('mouseover', event => {
    // When the overlay is hovered, disable swiping on the swiper container
    console.log('Overlay mouseover event triggered!');
    const swiperContainer = document.querySelector('.swiper-container');
    console.log('Swiper container element:', swiperContainer);
    swiperContainer.style.pointerEvents = 'none';
    //document.querySelector('.swiper-container').style.pointerEvents = 'none';
  });

  overlay.addEventListener('mouseout', event => {
    // When the overlay is no longer hovered, enable swiping on the swiper container
    console.log('Overlay mouseover event triggered!');
    document.querySelector('.swiper-container').style.pointerEvents = 'auto';
  });
}); */

const heroTextPart = document.querySelectorAll('.hero-section__text-part');

heroTextPart.forEach((textPart, index) => {
  const overlay = textPart.querySelector('.overlay');

  if (!overlay) {
    console.error(`No overlay element found within ${textPart}`);
    return;
  }

  const observer = new ResizeObserver(entries => {
    if (overlay) {
      overlay.style.height = `${textPart.offsetHeight}px`;
      overlay.style.top = `${textPart.offsetTop}px`;
      overlay.style.left = `${textPart.offsetLeft}px`;
      overlay.style.width = `${textPart.offsetWidth}px`;
    }
  });

  observer.observe(textPart);

  textPart.addEventListener('mouseover', event => {
    document.querySelector('.swiper-container').style.pointerEvents = 'none';
  });

  textPart.addEventListener('mouseout', event => {
    document.querySelector('.swiper-container').style.pointerEvents = 'auto';
  });
});
