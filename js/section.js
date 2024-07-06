// Function to hide all sections
function hideAllSections() {
  const sections = document.querySelectorAll('section');
  for (let i = 1; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }
}

// Add event listeners to links
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').replace('#', '');
      hideAllSections();
      document.getElementById(targetId).style.display = 'block';
    });
  });
});
