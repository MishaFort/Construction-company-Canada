const smoothScroll = document.querySelectorAll('.smooth-scroll');

smoothScroll.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });
  });
});

/* const smoothScroll = document.querySelectorAll('.smooth-scroll');

smoothScroll.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const href = this.getAttribute('href');
    const hashIndex = href.indexOf('#');
    let targetId;

    if (hashIndex !== -1) {
      targetId = href.substring(hashIndex);
    } else {
      targetId = '';
    }

    // Assuming the target page has already loaded
    // You may need to add a delay or a callback to ensure the page has loaded
    window.location.href = href;

    // Wait for the page to load, then smooth scroll to the target element
    window.addEventListener('load', function () {
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });
});
 */
