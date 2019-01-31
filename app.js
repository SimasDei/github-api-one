// Init Github Class
const github = new Github();

// Target search user input
// Listen for on Key down event
// Get input value
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', e => {
  // Get input value
  const userInput = e.target.value;

  if (userInput !== '') {
    // make HTTP call
    github.getUser(userInput).then(data => {
      if (data.profile.message === 'Not Found') {
        // Show an error
      } else {
        // Render the Profile
      }
    });
  } else {
    // Clear Profile
  }
});
