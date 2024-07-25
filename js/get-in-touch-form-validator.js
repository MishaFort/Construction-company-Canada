/* const modal = document.querySelector('.backdrop'); */

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

validatorGetInTouch.addField('#contact-information', [
  {
    validator: (value, fields) => {
      const emailValue = fields['#user-email-contact'].elem.value;
      const telValue = fields['#user-tel-contact'].elem.value;

      if (emailValue || telValue) {
        return true;
      }

      return false;
    },
    errorMessage: '&#8613; You should fill at least one contact information',
    onFail: () => {
      // Show error message
      document.querySelector('#contact-information-error').style.display =
        'block';
    },
    onSuccess: () => {
      // Hide error message
      document.querySelector('#contact-information-error').style.display =
        'none';
    },
  },
]);

// Add event listeners to the email and tel fields
document.querySelector('#user-email-contact').addEventListener('input', () => {
  validatorGetInTouch.revalidateField('#contact-information');
});

document.querySelector('#user-tel-contact').addEventListener('input', () => {
  validatorGetInTouch.revalidateField('#contact-information');
});

/////////////////////////////////////////////////////////////////////////

validatorGetInTouch
  .addRequiredGroup(
    '#checkbox__radio-group',
    '&#8613; You should select at least one option'
  )

  .addField('#terms-conditions-contact', [
    { rule: 'required', errorMessage: '&#8613; The field is required' },
  ])

  .onSuccess(event => {
    location.reload();
    /* modal.classList.toggle('is-hidden');

    emailjs.sendForm('service_pnqld1g', 'contact_form', '#contact-form').then(
      () => {
        console.log('SUCCESS!');
        window.location.reload();
      },
      error => {
        console.log('FAILED...', error);
      }
    ); */
  });

/*  .addField(
    '#user-email-contact',
    [
      { rule: 'required', errorMessage: '&#8613; The field is required' },
      { rule: 'email', errorMessage: '&#8613; Invalid field' },
    ],
    {
      successMessage: 'Email looks fine!',
    }
  ) */

/* .addField(
    '#user-tel-contact',
    [
      {
        rule: 'required',
        errorMessage: '&#8613; The field is required',
      },
      {
        rule: 'customRegexp',
        value: /[0-9+ ()-]{8,20}/gi,
        errorMessage: '&#8613; Invalid field',
      },
    ],
    {
      successMessage: 'Telephone looks fine!',
    }
  )
 */

/*   .addField('#email-contact', [
    { rule: 'required', errorMessage: '&#8613; The field is required' },
  ])
  .addField('#telephone-contact', [
    { rule: 'required', errorMessage: '&#8613; The field is required' },
  ]) */
