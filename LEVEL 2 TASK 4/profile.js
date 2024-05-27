// Check if a user is logged in
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (!loggedInUser) {
  // Redirect to the login page if no user is logged in
  window.location.href = 'login.html';
} else {
  // Render the profile content
  const profileContainer = document.getElementById('profileContainer');
  const profileContent = `
    <h2>Welcome, ${loggedInUser.name}!</h2>
    <img src='./Images/userProfile.png'/>
    <p>Username: ${loggedInUser.username}</p>
    <p>Email: ${loggedInUser.email}</p>
    <button id="logoutBtn">Logout</button>
  `;
  profileContainer.innerHTML = profileContent;

  // Handle logout
  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.addEventListener('click', () => {
    // Remove the logged-in user from localStorage
    localStorage.removeItem('loggedInUser');

    // Redirect to the login page
    window.location.href = 'login.html';
  });
}