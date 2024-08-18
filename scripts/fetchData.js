async function fetchProfileData() {
    const url = 'data/data.json';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP-fout! status: ${response.status}`);
        }
        const profileData = await response.json();

        document.getElementById('profiel-naam').textContent = profileData.persoonlijkeInfo.naam;
        document.getElementById('profiel-adres').textContent = profileData.persoonlijkeInfo.adres;
        document.getElementById('profiel-telefoon').textContent = profileData.persoonlijkeInfo.telefoon;
        document.getElementById('profiel-email').textContent = profileData.persoonlijkeInfo.email;

        const opleidingSectie = document.createElement('section');
        opleidingSectie.innerHTML = '<h2>Opleiding</h2>';
        profileData.opleiding.forEach(edu => {
            opleidingSectie.innerHTML += `
                <p><strong>${edu.diploma}</strong>, ${edu.instelling} (${edu.jaar})</p>
            `;
        });
        document.body.appendChild(opleidingSectie);

        const werkervaringSectie = document.createElement('section');
        werkervaringSectie.innerHTML = '<h2>Werkervaring</h2>';
        profileData.werkervaring.forEach(exp => {
            werkervaringSectie.innerHTML += `
                <p><strong>${exp.functie}</strong> bij ${exp.bedrijf} (${exp.jaar})</p>
                <p>${exp.omschrijving}</p>
            `;
        });
        document.body.appendChild(werkervaringSectie);

        const vaardighedenSectie = document.createElement('section');
        vaardighedenSectie.innerHTML = '<h2>Vaardigheden</h2>';
        profileData.vaardigheden.forEach(skill => {
            vaardighedenSectie.innerHTML += `<p>${skill}</p>`;
        });
        document.body.appendChild(vaardighedenSectie);

        const talenSectie = document.createElement('section');
        talenSectie.innerHTML = '<h2>Talen</h2>';
        for (const [taal, vaardigheid] of Object.entries(profileData.talen)) {
            talenSectie.innerHTML += `<p>${taal}: ${vaardigheid}</p>`;
        }
        document.body.appendChild(talenSectie);

        const hobbySectie = document.createElement('section');
        hobbySectie.innerHTML = '<h2>Hobby\'s</h2>';
        profileData["hobby's"].forEach(hobby => {
            hobbySectie.innerHTML += `<p>${hobby}</p>`;
        });
        document.body.appendChild(hobbySectie);

    } catch (error) {
        console.error('Fout bij het ophalen van profielgegevens:', error);
    }
}

fetchProfileData();
