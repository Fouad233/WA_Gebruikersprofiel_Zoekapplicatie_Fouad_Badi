const form = document.querySelector('#contact-form');
form.addEventListener('submit', function(event) {
    const email = form.querySelector('input[name="email"]').value;
    if (!validateEmail(email)) {
        alert('Ongeldig emailadres!');
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
