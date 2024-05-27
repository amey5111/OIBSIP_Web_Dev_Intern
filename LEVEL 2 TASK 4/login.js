// Function to handle form submission
const handleLogin = (e) => {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Get the users array from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Find the user with the given username
    const user = users.find((user) => user.username === username);
  
    if (!user) {
      alert('Invalid username or password.');
      return;
    }
  
    // Decrypt the stored password
    const decryptedPassword = atob(user.password);
  
    // Check if the entered password matches the decrypted password
    if (password === decryptedPassword) {
      // Store the logged-in user's information in localStorage
      localStorage.setItem('loggedInUser', JSON.stringify(user));
  
      // Redirect to the profile page
      window.location.href = 'profile.html';
    } else {
      alert('Invalid username or password.');
    }
  
    // Reset the form
    document.getElementById('loginForm').reset();
  };
  
  // Add event listener to the form
  document.getElementById('loginForm').addEventListener('submit', handleLogin);