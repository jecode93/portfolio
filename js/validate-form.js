// Get the form element
const formElement = document.getElementsByClassName('form-section')[0];

// Get the render element
const renderElement = document.querySelector('.render');

// Check if the email is lowercase
function checkEmail() {
  const email = document.getElementById('email').value;
  if (email.toString().toLowerCase() !== email) {
    return false;
  }
    return true;
}

// Remove error after 5 seconds
function removeError() {
  setTimeout(() => {
    renderElement.classList.remove('error');
    renderElement.classList.remove('success');
    renderElement.innerHTML = '';
  }, 5000);
}

// Function to validate the form
function validateForm() {
  const name = document.getElementById('fullname');
  const email = document.getElementById('email')
  const message = document.getElementById('message');

  if (name.value === '' || email.value === '' || message.value === '') {
    renderElement.classList.add('error');
    renderElement.innerHTML = 'All fields are required';
    removeError();
    return false;
 }

	if (!checkEmail()) {
    renderElement.classList.add('error');
    renderElement.innerHTML = 'Email must be lowercase';
    removeError();
    return false;
 }

  return true;
}

// Function to submit the form
function submitForm() {
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
      // submit the form
      formElement.submit();
      document.getElementById('fullname').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      renderElement.classList.remove('error');
      renderElement.classList.remove('isHidden');
      renderElement.classList.add('success');
      renderElement.innerHTML = 'Your message has been sent';
      removeError();
    }
  });
}

submitForm();