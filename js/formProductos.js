const btnProductos = document.getElementById('btnProductos');
const imagenInput = document.getElementById('imagen-url');
const previewContainer = document.getElementById('preview-container');

const cloudinaryWidget = cloudinary.createUploadWidget({
    cloudName: 'dnmraub5x',
    uploadPreset: 'Cafetlán',
}, (error, result) => {
    if (!error && result && result.event === "success") {
        const imagenUrl = result.info.secure_url;
        document.getElementById('imagen-url').value = imagenUrl;
        document.getElementById('preview-container').innerHTML = `
            <img src="${imagenUrl}" alt="Imagen subida" style="max-width: 200px; margin-top: 10px;">`;
        Swal.fire({
            icon: 'success',
            title: '¡Imagen subida!',
            text: 'La imagen se subió exitosamente.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar'
        });
    }
});

document.getElementById("upload_widget").addEventListener('click', function () {
    cloudinaryWidget.open();
}, false);

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const descripcion = document.getElementById('descripcion-producto').value.trim();
    const categoria = document.getElementById('categoria').value;
    const precio = document.getElementById('precio').value;
    const imagenUrl = document.getElementById('imagen-url').value;
    const alertContainer = document.getElementById('alertContainer');

    alertContainer.innerHTML = '';

    if (nombre === '' || descripcion === '' || categoria === '' || precio === '') {
        showAlert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]+$/;
    if (nombre.length < 3) {
        showAlert('El nombre debe tener al menos 3 caracteres.');
        return;
    } else if (!regexNombre.test(nombre)) {
        showAlert('El nombre no puede contener números ni caracteres especiales.');
        return;
    }

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

    if (!['Cafe', 'Cafeteras', 'Otro'].includes(categoria)) {
        showAlert('Debes seleccionar una categoría válida.');
        return;
    }

    if (precio <= 0) {
        showAlert('El precio debe ser mayor a 0.');
        return;
    }

    btnProductos.textContent = 'Enviando...';
    setTimeout(() => {
        btnProductos.textContent = 'Enviar';
        alertContainer.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                Producto agregado con éxito.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;

        const registro = {
            nombre,
            descripcion,
            categoria,
            precio,
            imagen: imagenUrl
        };
        const form = document.getElementById("form");
        form.reset(); 
        imagenInput.value = '';
        previewContainer.innerHTML = '';

        let productos = [];
        try {
            productos = JSON.parse(localStorage.getItem('productos')) || [];
        } catch (e) {
            console.error('Error al parsear productos de localStorage:', e);
            productos = [];
        }
        if (!Array.isArray(productos)) {
            productos = [];
        }
        productos.push(registro);
        localStorage.setItem('productos', JSON.stringify(productos));

        let productosAgregados = [];
        try {
            productosAgregados = JSON.parse(localStorage.getItem('producto')) || [];
        } catch (e) {
            console.error('Error al parsear producto de localStorage:', e);
            productosAgregados = [];
        }
        if (!Array.isArray(productosAgregados)) {
            productosAgregados = [];
        }
        productosAgregados.push(registro);
        localStorage.setItem('producto', JSON.stringify(productosAgregados));

        mostrarProductosDeLocalStorage();

        this.reset();
      
        // window.location.href = '/productos.html';
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