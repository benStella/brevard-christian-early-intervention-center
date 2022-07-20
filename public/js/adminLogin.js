function adminLoginForm(event) {
    event.preventDefault()

    const email = document.querySelector('#admin-username').value.trim
    const password = document.querySelector('#admin-password').value.trim

    if (email && password) {
        fetch('/api/adminLogin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password
            })

        }).then(response => {console.log(response)})
    }
}

document.querySelector('#login-form').addEventListener('submit', adminLoginForm)