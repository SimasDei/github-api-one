class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // User = value from user input
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}" />
        <a href="${
          user.html_url
        }" target="_blank" class="btn btn-success btn-block">Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repositories: ${
            user.public_repos
          }</span>
          <span class="badge badge-secondary">Gists : ${
            user.public_gists
          }</span>
          <span class="badge badge-warning">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
         <hr /> <br />
         <ul class="list-group">
          <li class="list-group-item">Company:  ${user.company}</li>
          <li class="list-group-item">Website:  ${user.blog}</li>
          <li class="list-group-item">Location:  ${user.location}</li>
          <li class="list-group-item">Joined in:  ${user.created_at}</li>
         </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3"> Latest Projects </h3>
    <div id="repos"></div>
   `;
  }

  // Display latest profiles
  showRepos(repositories) {
    let output = ``;

    repositories.forEach(repo => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${
              repo.stargazers_count
            }</span>
            <span class="badge badge-secondary">Watchers : ${
              repo.watchers_count
            }</span>
            <span class="badge badge-warning">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });
    // Output repositories
    document.getElementById('repos').innerHTML = output;
  }

  // If no such profile exists, display a 'not found' message
  showAlert(message, classname) {
    // Check if alert is already displayed, and then clear it
    this.clearAlert();

    // Create HTML element
    const div = document.createElement('div');
    div.className = classname;
    div.appendChild(document.createTextNode(message));
    // Get Parent Element
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    // Insert alert message
    container.insertBefore(div, search);

    // Set timeout, clear Potential alert after
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // If user input value is empty, or goes back to empty
  // Clear the currently displayed profile
  clearProfile() {
    this.profile.innerHTML = '';
  }

  // Clear User not found alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
