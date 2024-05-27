// Function to handle form submission
const handleSignUp = (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if username already exists
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const userExists = users.some((user) => user.username === username);

  if (userExists) {
    alert('Username already exists. Please choose a different one.');
    return;
  }

  // Encrypt the password
  const encryptedPassword = btoa(password);

  // Create a new user object
  const newUser = {
    name,
    email,
    username,
    password: encryptedPassword,
  };

  // Add the new user to the users array
  users.push(newUser);

  // Store the updated users array in localStorage
  localStorage.setItem('users', JSON.stringify(users));

  // Reset the form
  document.getElementById('signupForm').reset();

  alert('Sign up successful!');
  window.location.href = 'login.html'
};

// Add event listener to the form
document.getElementById('signupForm').addEventListener('submit', handleSignUp);