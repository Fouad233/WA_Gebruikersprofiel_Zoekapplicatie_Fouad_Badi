const API_URL = 'https://api.github.com/users/{username}/repos';

async function fetchData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();