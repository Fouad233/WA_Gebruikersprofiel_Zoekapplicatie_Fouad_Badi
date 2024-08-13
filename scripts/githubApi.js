async function fetchGitHubRepos() {
    const username = 'your-github-username';
    const url = `https://api.github.com/users/${username}/repos`;
  
    try {
      const response = await fetch(url);
      const repos = await response.json();
  
      const repoList = document.querySelector('#repo-list');
      repos.forEach(repo => {
        const listItem = document.createElement('li');
        listItem.textContent = repo.name;
        repoList.appendChild(listItem);
      });
    } catch (error) {
      console.error('Error fetching repos:', error);
    }
  }
  
  fetchGitHubRepos();
  