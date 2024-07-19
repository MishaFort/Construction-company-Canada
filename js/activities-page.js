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
      .replace(/\s+/g, '-')}`;
    const targetDiv = document.getElementById(targetId);

    if (targetDiv) {
      // Hide all activities divs
      activitiesDivs.forEach(div => (div.style.display = 'none'));

      // Show the target div
      targetDiv.style.display = 'block';
      window.location.hash = `#${targetDiv.id}`;

      // Scroll to the top of the page
      window.scrollTo(0, 0);

      // Hide the activities list section
      document.querySelector('.activities-list').style.display = 'none';

      // Show the activities buttons section
      document.querySelector('.activities-buttons').style.display = 'block';

      // Find the corresponding button in the activities-buttons section
      const correspondingButton = [...activitiesSublinkButtons].find(button =>
        button.textContent
          .trim()
          .toLowerCase()
          /* .replace(/-/g, ' ') */
          .includes(link.textContent.trim().toLowerCase())
      );

      if (correspondingButton) {
        // Remove previous underline style and button__active class
        activitiesSublinkButtons.forEach(button => {
          button.classList.remove('button__active');
          button.style.textDecoration = 'none';
        });

        // Add underline style to the corresponding button
        correspondingButton.classList.add('button__active');
        correspondingButton.style.textDecoration = 'underline';
      }
    }
  });
});

/////////////////////////////

////////////////////////////////////////////

// Get all the sections and buttons
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
      .replace(/\s+/g, '-');
    const sectionToShow = document.getElementById(`activities-${buttonText}`);

    // Remove active class and underline from all buttons
    buttons.forEach(button => {
      button.classList.remove('button__active');
      button.style.textDecoration = 'none';
    });

    // Add active class and underline to the clicked button
    event.currentTarget.classList.add('button__active');
    event.currentTarget.style.textDecoration = 'underline';

    // Hide all sections except the hero section and the target section
    sections.forEach(section => {
      if (
        section !== sectionToShow &&
        section !== document.querySelector('.hero-section') &&
        section !== activitiesButtons
      ) {
        section.style.display = 'none';
      }
    });

    // Show the target section
    if (sectionToShow) {
      sectionToShow.style.display = 'block';
      window.location.hash = `#${sectionToShow.id}`;
    }

    // Show the activities buttons section
    activitiesButtons.style.display = 'block';
  });
});

///////////////////////////

/* const activitiesMainListButtons = Array.from(
  document.querySelectorAll('.activities-buttons')
); */

const activitiesListLinks = document.querySelectorAll('.activities-list__link');

activitiesListLinks.forEach(link => {
  link.addEventListener('click', event => {
    const buttonText = event.currentTarget.textContent
      .trim()
      .toLowerCase()
      .replace(/&/g, '')
      .replace(/\s+/g, '-');

    const correspondingButton = [...activitiesSublinkButtons].find(button => {
      const normalizedButtonText = button.textContent
        .trim()
        .replace(/&/g, '')
        .replace(/\s+/g, '-')
        .toLowerCase();
      return normalizedButtonText.includes(buttonText);
    });

    if (correspondingButton) {
      // Add underline style to the corresponding button
      /* correspondingButton.classList.add('button__active'); */
      correspondingButton.style.textDecoration = 'underline';
    }
  });
});

///////////////////////////

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

      // Find the corresponding button and add the active class
      const buttonText = sectionToShow.id
        .replace('activities-', '')
        .replace(/-/g, ' ')
        .trim();
      const correspondingButton = Array.from(
        document.querySelectorAll(
          '.activities-list__link, .activities-buttons button'
        )
      ).find(button =>
        button.textContent
          .trim()
          .toLowerCase()
          .replace(/-/g, ' ')
          .includes(buttonText)
      );
      if (correspondingButton) {
        // Remove active class from all buttons
        buttons.forEach(button => button.classList.remove('button__active'));
        // Add active class to the corresponding button
        correspondingButton.classList.add('button__active');
        // Add underline to the corresponding button
        correspondingButton.style.textDecoration = 'underline';
      }
    }
  } else {
    // If no hash is present, remove active class and underline from all buttons
    buttons.forEach(button => {
      button.classList.remove('button__active');
      button.style.textDecoration = 'none';
    });
  }
}

///////////////////////////

///////////////////////////

window.addEventListener('load', handleHashChange);
window.addEventListener('hashchange', handleHashChange);

///////////////////////////
/* 
// Get all buttons with class "button" in the activities-buttons section
const activityPreloadButtons = document.querySelectorAll(
  '.activities-buttons .button'
);

// Function to add underline style to the corresponding button
function addUnderlineToButton(hash) {
  const buttonText = hash.replace('activities-', '').replace(/-/g, ' ').trim();
  const correspondingButton = Array.from(activityPreloadButtons).find(button =>
    button.textContent
      .trim()
      .toLowerCase()
      .replace(/-/g, ' ')
      .includes(buttonText)
  );
  if (correspondingButton) {
    // Remove active class and underline from all buttons
    activityPreloadButtons.forEach(button => {
      button.classList.remove('button__active');
      button.style.textDecoration = 'none';
    });
    // Add active class and underline to the corresponding button
    correspondingButton.classList.add('button__active');
    correspondingButton.style.textDecoration = 'underline';
  }
}

// Call the function on page load and hash change
window.addEventListener('load', () => {
  const hash = window.location.hash;
  if (hash) {
    addUnderlineToButton(hash);
  }
});

window.addEventListener('hashchange', () => {
  const hash = window.location.hash;
  if (hash) {
    addUnderlineToButton(hash);
  }
});
 */
