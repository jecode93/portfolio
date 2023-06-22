// Use local storage to save user input.
const name = document.getElementById('fullname');
const email = document.getElementById('email');
const message = document.getElementById('message');

// Get user input from local storage input object and set it to the form
function getUserInput() {
  const input = JSON.parse(localStorage.getItem('input'));
  if (input) {
    name.value = input.name;
    email.value = input.email;
    message.value = input.message;
  }
}

// Save user input to local storage in an object
function saveInput() {
  const input = {
    name: name.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('input', JSON.stringify(input));
}

// Call getInput function
getUserInput();

// When the user changes the content of any input field, the data is saved to the local storage.
name.addEventListener('input', saveInput);
email.addEventListener('input', saveInput);
message.addEventListener('input', saveInput);