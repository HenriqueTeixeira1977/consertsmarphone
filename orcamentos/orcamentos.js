const scriptURL = 'https://script.google.com/macros/s/AKfycbwLIjrOnllDf0Q9g0e5NgUFbMa58vyc9mDQP5J-gMeSBYjPw_4fHfLX25URB2e9v7wL/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})