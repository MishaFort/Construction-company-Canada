/* const modal = document.querySelector('.backdrop'); */

const validator = new JustValidate('#footer-form');
validator
  .addField(
    '#user-email',
    [
      { rule: 'required', errorMessage: '&#8613; The field is required' },
      { rule: 'email', errorMessage: '&#8613; Invalid field' },
    ],
    {
      successMessage: 'Email looks fine!',
    }
  )

  .addField('#terms-conditions', [
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
