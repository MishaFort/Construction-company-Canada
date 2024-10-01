const validatorGetInTouch = new JustValidate('#get-in-touch-section-form');
validatorGetInTouch.addField('#user-name-contact', [
  { rule: 'required', errorMessage: '&#8613; The field is required' },
  {
    rule: 'customRegexp',
    value: /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]{1,30}/gi,
    errorMessage: '&#8613; Invalid field',
  },
]);

validatorGetInTouch.addField('#user-email-contact', [
  {
    rule: 'email',
    errorMessage: '&#8613; Invalid email',
  },
]);

validatorGetInTouch.addField('#user-tel-contact', [
  {
    rule: 'customRegexp',
    value: /[0-9+ ()-]{8,20}/gi,
    errorMessage: '&#8613; Invalid telephone',
  },
]);

const form = document.querySelector('#input-contact-option-group');
const contactInformationField = document.createElement('input');
contactInformationField.type = 'hidden';
contactInformationField.id = 'contact-information';

form.appendChild(contactInformationField);

validatorGetInTouch
  .addRequiredGroup(
    '#checkbox__radio-group',
    '&#8613; You should select at least one option'
  )
  .addField('#terms-conditions-contact', [
    { rule: 'required', errorMessage: '&#8613; The field is required' },
  ]);
validatorGetInTouch.addField('#contact-information', [
  {
    validator: (value, fields) => {
      const isTelephoneContact = $('#telephone-contact').is(':checked');

      const emailValue = fields['#user-email-contact'].elem.value.trim(); // Trim whitespace
      const telValue = fields['#user-tel-contact'].elem.value.trim(); // Trim whitespace

      // Email is always required
      if (!emailValue) {
        return false; // Email is not provided
      }

      // If "Telephone" is selected, telephone must be provided
      if (isTelephoneContact && !telValue) {
        return false; // Telephone is selected but not provided
      }

      // All validation checks passed
      return true;
    },

    errorMessage: (value, fields) => {
      const isTelephoneContact = $('#telephone-contact').is(':checked');

      const emailValue = fields[2].elem.value.trim(); // Trim whitespace
      const telValue = fields[3].elem.value.trim(); // Trim whitespace

      // Check for email not filled in
      if (!emailValue) {
        return `&#8613; Please provide your email address.`;
      }

      // Check for telephone not filled in if "Telephone" is selected
      if (isTelephoneContact && !telValue) {
        return `&#8613; Please provide your telephone number since "Telephone" is selected.`;
      }

      // Default case if no error
      return '';
    },
  },
]);

document.querySelector('#user-email-contact').addEventListener('input', () => {
  validatorGetInTouch.revalidateField('#contact-information');
});

document.querySelector('#user-tel-contact').addEventListener('input', () => {
  validatorGetInTouch.revalidateField('#contact-information');
});

/////////////////////////////////////////////////////////////////////////

validatorGetInTouch.onSuccess(event => {
  event.preventDefault();
  const formElement = document.querySelector('#get-in-touch-section-form');
  const formData = new FormData(formElement);
  document.getElementById('preloader').style.display = 'block';
  // Make the AJAX request
  fetch('send_email.php', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.text()) // Get the response as text
    .then(() => {
      formElement.reset();
      document.getElementById('preloader').style.display = 'none';
      document.getElementById('get-in-touch-section-form').style.display =
        'none';
      document.getElementById('thank-you-message').style.display = 'block';
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
      document.getElementById('preloader').style.display = 'none';
    });
});
