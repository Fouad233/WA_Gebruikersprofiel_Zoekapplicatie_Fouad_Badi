document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const allSections = document.querySelectorAll('section');
  
    header.style.backgroundColor = '#f8faf9';
    allSections.forEach(section => {
      section.classList.add('highlight');
    });
  
    const Gebruiker = { naam: 'Fouad', leeftijd: 19 };
    const groeting = `Hello mijn naam is ${Gebruiker.naam} en ik ben ${Gebruiker.leeftijd} jaar oud.`;
    document.getElementById('groeting').textContent = groeting;
    
  });