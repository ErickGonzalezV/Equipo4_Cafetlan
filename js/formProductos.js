const btnProductos = document.getElementById('btnProductos');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Declarar variables
    const nombre = document.getElementById('nombre').value.trim();
    const descripcion = document.getElementById('descripcion-producto').value.trim();
    const categoria = document.getElementById('categoria').value;
    const precio = document.getElementById('precio').value;
    const imagen = document.getElementById('imagen').files[0]; //el archivo se guarda en una lista, por eso se accede al primer elemento de esa lista
    const alertContainer = document.getElementById('alertContainer');

    // Limpiar alertas previas
    alertContainer.innerHTML = '';

    // Validación de campos vacíos
    if (nombre === '' || descripcion === '' || categoria === '' || precio === '') {
        showAlert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    // Validación nombre
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]+$/;
    if (nombre.length < 3) {
        showAlert('El nombre debe tener al menos 3 caracteres.');
        return;
    } else if (!regexNombre.test(nombre)) {
        showAlert('El nombre no puede contener números ni caracteres especiales.');
        return;
    }

    // Validación descripción
    const descripcionRegex = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ][A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9\s.,;:¡!¿?\-_"$%()&*@]*$/;
    if (descripcion.length < 10) {
        showAlert('La descripción debe tener al menos 10 caracteres.');
        return;
    } else if (descripcion.length > 300) {
        showAlert('La descripción no puede exceder los 300 caracteres.');
        return;
    } else if (!descripcionRegex.test(descripcion)) {
        showAlert('La descripción debe iniciar con una letra y no contener caracteres inválidos.');
        return;
    }

    // Validación categoría
    if (!['Cafe', 'Cafeteras', 'Otro'].includes(categoria)) {
        showAlert('Debes seleccionar una categoría válida.');
        return;
    }

    // Validación precio
    if (precio <= 0) {
        showAlert('El precio debe ser mayor a 0.');
        return;
    }

    // Validación imagen
    if (imagen) {
        const maxSize = 1 * 1024 * 1024; // Maximo 1MB en la imagen
        if (imagen.size > maxSize) {
            showAlert('La imagen no puede exceder 1MB.');
            return;
        }
        if (!imagen.type.startsWith('image/')) { //el formato del archivo tiene que ser imagen (MIME TYPE)
            showAlert('El archivo debe ser una imagen.');
            return;
        }
    }

    // Mostrar alerta de éxito
    btnProductos.textContent = 'Enviando...';
    setTimeout(() => {
        btnProductos.textContent = 'Enviar';
        alertContainer.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                Producto agregado con éxito.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;

        const registro={
            nombre,
            descripcion,
            categoria,
            precio,
            imagen
        };
    
        const jsonProd=JSON.stringify(registro);
        localStorage.setItem('producto',jsonProd);

        this.reset();
    });

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