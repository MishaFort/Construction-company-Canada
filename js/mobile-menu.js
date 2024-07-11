const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

const toggleMenu = () => {
  mobileMenu.classList.toggle('is-open');
  if (window.matchMedia(`(max-width: 768px)`).matches) {
    document.body.classList.toggle('is-scroll-disabled');
  }
};

const disableScroll = () =>
  document.body.classList.toggle('is-scroll-disabled');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', toggleMenu);
});

const activitiesLink = document.querySelector('.link--first-click');

let isFirstClick = true;

activitiesLink.addEventListener('click', e => {
  if (isFirstClick) {
    e.preventDefault();
    activitiesLink.nextElementSibling.classList.toggle(
      'header__sub-list--visible'
    );
    isFirstClick = false;
  } else {
    if (
      activitiesLink.nextElementSibling.classList.contains(
        'header__sub-list--visible'
      )
    ) {
      return;
    } else {
      e.preventDefault();
      activitiesLink.nextElementSibling.classList.toggle(
        'header__sub-list--visible'
      );
      isFirstClick = false;
    }
  }
});

document.addEventListener('click', e => {
  if (
    !activitiesLink.contains(e.target) &&
    !activitiesLink.nextElementSibling.contains(e.target)
  ) {
    activitiesLink.nextElementSibling.classList.remove(
      'header__sub-list--visible'
    );
    isFirstClick = true;
  }
});
