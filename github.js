/*
Github Api
Client ID
17f8c4e30b0fb2d31e5e
Client Secret
cc9ff210d27e4e3194a9c43d81d40ab0316022af
*/

class Github {
  constructor() {
    this.client_id = '17f8c4e30b0fb2d31e5e';
    this.client_secret = 'cc9ff210d27e4e3194a9c43d81d40ab0316022af';
    this.repos_count = 10;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`
      https://api.github.com/users/${user}?client_id=${
      this.client_id
    }&client_secret=${this.client_secret}
    `);

    const repoResponse = await fetch(`
    https://api.github.com/users/${user}/repos?per_page=${
      this.repos_count
    }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
      this.client_secret
    }
  `);

    const profile = await profileResponse.json();
    const repositories = await repoResponse.json();

    // Return profile data as an Object
    return { profile, repositories };
  }
}
