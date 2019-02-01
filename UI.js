class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

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
            <span class="badge badge-info">Public Following: ${
              user.following
            }</span>
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
}
