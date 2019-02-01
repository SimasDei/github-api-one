// Init Github Class
const github = new Github();
// Init UI Class
const ui = new UI();
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
        // Display User not Found Message
        ui.showAlert('User Not found', 'alert alert-danger');
      } else {
        // Render the Profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
