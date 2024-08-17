async function fetchLinkedInProfile() {
  const url = 'https://api.linkedin.com/v2/me';
  const accessToken = 'Toegang';  

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error('Network antwoord is niet ok');
    }

    const profileData = await response.json();
    
    document.getElementById('profile-name').textContent = profileData.localizedFirstName + ' ' + profileData.localizedLastName;
    document.getElementById('profile-headline').textContent = profileData.headline;
    
  } catch (error) {
    console.error('Error fetching LinkedIn profiel:', error);
  }
}

fetchLinkedInProfile();
