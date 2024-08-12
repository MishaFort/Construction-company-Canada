const headerSubLinks = document.querySelectorAll('.header__sub-link');
const activitiesDivs = [...document.querySelectorAll('div[id^="activities-"]')];
const activitiesSublinkButtons = document.querySelectorAll(
  '.activities-buttons button'
);

headerSubLinks.forEach(link => {
  link.addEventListener('click', e => {
    const targetId = `activities-${link.textContent
      .trim()
      .toLowerCase()
      .replace(/&/g, '')
      .replace(/\s+/g, '-')}`
      .replace(/\//g, '-')
      .replace(/,/g, '');
    const targetDiv = document.getElementById(targetId);

    /* if (targetDiv) {
      activitiesDivs.forEach(div => (div.style.display = 'none'));

      targetDiv.style.display = 'block';
      window.location.hash = `#${targetDiv.id}`;

      window.scrollTo(0, 0);

      document.querySelector('.activities-list').style.display = 'none';

      document.querySelector('.activities-buttons').style.display = 'block';

      const correspondingButton = [...activitiesSublinkButtons].find(button =>
        button.textContent
          .trim()
          .toLowerCase()
          .includes(link.textContent.trim().toLowerCase())
      );

      if (correspondingButton) {
        activitiesSublinkButtons.forEach(button => {
          button.style.textDecoration = 'none';
          button.style.opacity = '1';
        });

        correspondingButton.style.textDecoration = 'underline';
        correspondingButton.style.opacity = '0.6';
      }
    } */

    if (targetDiv) {
      if (targetDiv.style.display === 'block') {
        // If the target div is already open, scroll to it
        window.scrollTo(0, targetDiv.offsetTop);
      } else {
        activitiesDivs.forEach(div => (div.style.display = 'none'));
        targetDiv.style.display = 'block';
        window.location.hash = `#${targetDiv.id}`;
        window.scrollTo(0, 0);
        document.querySelector('.activities-list').style.display = 'none';
        document.querySelector('.activities-buttons').style.display = 'block';

        const correspondingButton = [...activitiesSublinkButtons].find(button =>
          button.textContent
            .trim()
            .toLowerCase()
            .includes(link.textContent.trim().toLowerCase())
        );

        if (correspondingButton) {
          activitiesSublinkButtons.forEach(button => {
            button.style.textDecoration = 'none';
            button.style.opacity = '1';
          });
          correspondingButton.style.textDecoration = 'underline';
          correspondingButton.style.opacity = '0.6';
        }
      }
    }
  });
});

//////////////////////////////////////////////////////////////////////

const sections = document.querySelectorAll(
  '.activities-list, [id^="activities-"]'
);
const buttons = document.querySelectorAll(
  '.activities-list__link,.activities-buttons button'
);
const activitiesButtons = document.querySelector('.activities-buttons');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    const buttonText = event.currentTarget.textContent
      .trim()
      .toLowerCase()
      .replace(/&/g, '')
      .replace(/\s+/g, '-')
      .replace(/\//g, '-')
      .replace(/,/g, '');
    const sectionToShow = document.getElementById(`activities-${buttonText}`);

    buttons.forEach(button => {
      button.style.textDecoration = 'none';
      button.style.opacity = '1';
    });

    event.currentTarget.style.textDecoration = 'underline';
    event.currentTarget.style.opacity = '0.6';

    sections.forEach(section => {
      if (
        section !== sectionToShow &&
        section !== document.querySelector('.hero-section') &&
        section !== activitiesButtons
      ) {
        section.style.display = 'none';
      }
    });

    if (sectionToShow) {
      sectionToShow.style.display = 'block';
      window.location.hash = `#${sectionToShow.id}`;
    }

    activitiesButtons.style.display = 'block';
  });
});

//////////////////////////////////////////////////////////////////////////

const activitiesListLinks = document.querySelectorAll('.activities-list__link');

activitiesListLinks.forEach(link => {
  link.addEventListener('click', event => {
    const buttonText = event.currentTarget.textContent
      .trim()
      .toLowerCase()
      .replace(/&/g, '')
      .replace(/\s+/g, '-')
      .replace(/\//g, '-')
      .replace(/,/g, '');

    const correspondingButton = [...activitiesSublinkButtons].find(button => {
      const normalizedButtonText = button.textContent
        .trim()
        .replace(/&/g, '')
        .replace(/\s+/g, '-')
        .replace(/\//g, '-')
        .replace(/,/g, '')
        .toLowerCase();
      return normalizedButtonText.includes(buttonText);
    });

    if (correspondingButton) {
      correspondingButton.style.textDecoration = 'underline';
      correspondingButton.style.opacity = '1';
    }
  });
});

////////////////////////////////////////////////////////////////////////////

function handleHashChange() {
  const hash = window.location.hash;
  if (hash) {
    const sectionToShow = document.getElementById(hash.substring(1));
    if (sectionToShow) {
      sections.forEach(section => {
        if (
          section !== sectionToShow &&
          section !== document.querySelector('.hero-section') &&
          section !== activitiesButtons
        ) {
          section.style.display = 'none';
        }
      });
      sectionToShow.style.display = 'block';
      activitiesButtons.style.display = 'block';

      const sectionToShowIdHash = sectionToShow.id.replace('activities-', '');
      const correspondingButtonHash =
        document.getElementById(sectionToShowIdHash);

      if (correspondingButtonHash) {
        // Remove underline from all buttons
        buttons.forEach(button => {
          button.style.textDecoration = 'none';
          button.style.opacity = '1';
        });
        // Add underline to the corresponding button
        correspondingButtonHash.style.textDecoration = 'underline';
        correspondingButtonHash.style.opacity = '0.6';
      }

      window.scrollTo(0, sectionToShow.offsetTop);
    }
  } else {
    // If the URL is activities.html, reset the state
    if (window.location.pathname === '/activities.html') {
      activitiesDivs.forEach(div => (div.style.display = 'none'));
      document.querySelector('.activities-list').style.display = 'block';
      document.querySelector('.activities-buttons').style.display = 'none';
      window.scrollTo(0, document.querySelector('.activities-list').offsetTop);
    }
  }
}

window.addEventListener('load', handleHashChange);
window.addEventListener('hashchange', handleHashChange);
window.addEventListener('pageshow', function (event) {
  if (event.persisted) {
    // If the page was restored from the browser's cache, scroll to the anchor
    handleHashChange();
  }
});

// Set scroll restoration to manual
window.history.scrollRestoration = 'manual';

////////////////////////////////////////////////////////////////////////////

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
  link.addEventListener('click', e => {
    if (link !== activitiesLink && !isFirstClick) {
      toggleMenu();
    }
  });
});

headerSubLinks.forEach(link => {
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
