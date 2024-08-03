const copyrightElement = document.querySelector('.copyright__year');
const currentYear = new Date().getFullYear();
copyrightElement.textContent = `\u00A9${currentYear} Phoenix`;
