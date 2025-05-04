function handleLogin() {
    const email = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    fetch('https://your-api-endpoint.com/login', {
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
            alert('Login failed. Please check your credentials.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during login. Please try again.');
    });
}
