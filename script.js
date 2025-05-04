function handleLogin() {
 const email = document.querySelector('.input-field[type="text"]').value;
    const password = document.querySelector('.input-field[type="password"]').value;

    fetch('https://arsa-back.onrender.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => {
        if (response.ok) {
            window.location.href = 'https://your-redirect-url.com';
        } else {

        }
    })
    .catch(error => {

    });
}
