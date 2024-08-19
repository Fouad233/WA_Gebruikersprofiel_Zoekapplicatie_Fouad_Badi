document.addEventListener('DOMContentLoaded', () => {
    initializeUser();

    document.getElementById('search-button').addEventListener('click', () => {
        const name = document.getElementById('search-name').value.trim();
        if (name) {
            searchUsersByName(name);
        }
    });

    document.getElementById('login-logo').addEventListener('click', () => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            alert(`Naam: ${userData.name}\nAchternaam: ${userData.surname}\nLeeftijd: ${userData.age}\nEmail: ${userData.email}`);
        } else {
            alert('Geen gebruikersgegevens beschikbaar.');
        }
    });
});

async function searchUsersByName(name) {
    const url = 'https://jsonplaceholder.typicode.com/users';

    try {
        console.log(`Fetching data from URL: ${url}`);
        const data = await fetchUserData(url);
        console.log('API Response:', data);

        const filteredUsers = data.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
        displayUserList(filteredUsers);
    } catch (error) {
        console.error('Fout bij het ophalen van gegevens:', error);
        document.getElementById('user-details').innerHTML = '<p>Geen gegevens gevonden of er is een fout opgetreden.</p>';
    }
}

function fetchUserData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            console.error('Fout bij het ophalen van gegevens:', error);
        });
}

function displayUserList(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    if (users.length === 0) {
        userList.innerHTML = '<p>Geen gebruikers gevonden.</p>';
        return;
    }

    const userHTML = users.map(({ name, email, address, company }) => `
        <div class='user' data-name="${name}" data-email="${email}" data-address="${address.street}, ${address.city}" data-company="${company.name}">
            <h3>${name}</h3>
            <p>Email: ${email}</p>
            <p>Adres: ${address.street}, ${address.city}</p>
            <p>Bedrijf: ${company.name}</p>
        </div>
    `).join('');

    userList.innerHTML = userHTML;

    document.querySelectorAll('.user').forEach(userDiv => {
        userDiv.addEventListener('click', function() {
            const { name, email, address, company } = this.dataset;
            const userData = {
                name: name,
                email: email,
                address: address,
                company: company
            };

            localStorage.setItem('userData', JSON.stringify(userData));
            updateLoginUser(userData);
        });
    });
}

function updateLoginUser(userData) {
    const loginUserSpan = document.getElementById('login-user');
    loginUserSpan.textContent = `Naam: ${userData.name}`;

    const initials = userData.name.split(' ').map(part => part[0]).join('');
    document.getElementById('login-logo').textContent = initials.toUpperCase();
}

function initializeUser() {
    const defaultUserData = {
        name: 'Fouad',
        surname: 'Badi',
        age: 19,
        email: 'fouad.badi@student.ehb.be'
    };
    localStorage.setItem('userData', JSON.stringify(defaultUserData));
    
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        updateLoginUser(userData);
    }
}

(function() {
    console.log("Deze functie voert zichzelf uit.");
})();

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr);

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = mergeObjects(obj1, obj2);
console.log(mergedObj);

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Som van nummers:', sum);

const square = num => num * num;
console.log('Kwadraat van 5:', square(5));

function processUserData(user, callback) {
    setTimeout(() => {
        callback(`Verwerkte gebruiker: ${user.name}`);
    }, 1000);
}

processUserData({ name: 'John Doe' }, message => {
    console.log(message);
});
