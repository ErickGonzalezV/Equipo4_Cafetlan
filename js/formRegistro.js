const btnRegistro = document.getElementById('btnRegistro');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const alertContainer = document.getElementById('alertContainer');

    alertContainer.innerHTML = '';

    if (nombre === '' || email === '' || telefono === '' || password === '' || confirmPassword === '') {
        showAlert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    //Nombre
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]+$/;
    if (nombre.length < 3) {
        showAlert('El nombre debe tener al menos 3 caracteres.');
        return;
    } else if (!regexNombre.test(nombre)) {
        showAlert('El nombre no puede contener números ni caracteres especiales.');
        return;
    }

    //Telefono
    const regexNumber = /^(?=.*[1-9])[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (telefono === "" || !regexNumber.test(telefono)) {
        showAlert('El número proporcionado no es válido.');
        return;
    }
    digits = telefono;
    const allSame = digits.split('').every(d => d === digits[0]);
    if (allSame) {
        showAlert('El número no puede tener todos los dígitos iguales.');
        return;
    }

    //Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        showAlert('Por favor ingresa un correo electrónico');
        return;
      } else if (!email.includes("@")) {
        showAlert('Tu correo debe contener un @.');
        return;
      } else if (!email.includes(".")) {
        showAlert('Tu correo debe contener un dominio como .com.');
        return;
      } else if (!emailRegex.test(email)) {
        showAlert('El correo no tiene un formato válido.');
        return;
      }

    //Password
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    if (password === "") {
        showAlert('Por favor ingresa una contraseña');
        return;
      }  else if (!passwordRegex.test(password)) {
        showAlert('La contraseña no tiene un formato válido.');
        return;
      }

    if (password !== confirmPassword) {
        showAlert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
        return;
    }

    btnRegistro.textContent = 'Registrando...';
    setTimeout(() => {
        btnRegistro.textContent = 'Enviar';
        alertContainer.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                Registro de usuario éxitoso.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;

        const registro = {
            nombre,
            telefono,
            email,
            password,
            confirmPassword
        };

        let datos = [];
        try {
            datos = JSON.parse(localStorage.getItem('datos')) || [];
        } catch (e) {
            console.error('Error al parsear datos de localStorage:', e);
            datos = [];
        }
        if (!Array.isArray(datos)) {
            datos = [];
        }
        datos.push(registro);
        localStorage.setItem('datos', JSON.stringify(datos));

        this.reset();
    }, 1000);

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