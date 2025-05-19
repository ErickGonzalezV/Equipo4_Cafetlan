const btnLogin = document.getElementById('signIn');

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault()

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const alertContainer = document.getElementById('alertContainer');

    alertContainer.innerHTML = '';


    let users = JSON.parse(localStorage.getItem("datos")) || [];
    const user = users.find(user => user.email === email && user.password === password);


    if (user) {
        sessionStorage.setItem("Usuario", JSON.stringify(user));
        alertContainer.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                Inicio de usuario exitoso.
            </div>
        `;
        window.location.href = "index.html";
        return;
    } else {
        showAlert('Su correo y/o contraseña es errónea');
        return;
    }

    function showAlert(message) {
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-danger alert-dismissible fade show';
        alertDiv.role = 'alert';
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        alertContainer.appendChild(alertDiv);
    }

});