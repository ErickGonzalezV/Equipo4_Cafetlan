const btnProductos = document.getElementById('btnProductos');
const imagenInput = document.getElementById('imagen-url');
const previewContainer = document.getElementById('preview-container');

//botón agregado segun el tutorial de Cloudinary 
/* {<div>
    <button
        id= "upload_widget"
        class = "cloudinary-button">
        Upload files    
    </button>
</div> } */
//integramos la funcionalidad de Cloudinary 
/* 1.Usamos Cloudinary para subir la imagen y obtener la URL
   2.En vez de tomar la imagen directamente del input de archivo, tomamos la URL de la imagen cargada desde Cloudinary.
3.El campo de imagen se llena con la URL obtenida de Cloudinary, la cual se almacena en localStorage. */

const cloudinaryWidget = cloudinary.createUploadWidget({
    cloudName: 'dnmraub5x', // Reemplaza con tu Cloud Name
    uploadPreset: 'Cafetlán', // Reemplaza con tu Upload Preset
}, (error, result) => {
    if (!error && result && result.event === "success") {
        // Al subir la imagen a Cloudinary, guardamos la URL de la imagen
        const imagenUrl = result.info.secure_url;
        document.getElementById('imagen-url').value = imagenUrl;
        document.getElementById('preview-container').innerHTML = `
            <img src="${imagenUrl}" alt="Imagen subida" style="max-width: 200px; margin-top: 10px;">`;
        //showAlert('Imagen subida exitosamente!');
        //alerta de la libreria SweetAlert2
        Swal.fire({
            icon: 'success',
            title: '¡Imagen subida!',
            text: 'La imagen se subió exitosamente.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar'
        });
    }
});

// Abre el widget cuando el usuario haga clic en el botón de subir imagen
document.getElementById("upload_widget").addEventListener('click', function () {
    cloudinaryWidget.open();
}, false);

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Declarar variables
    const nombre = document.getElementById('nombre').value.trim();
    const descripcion = document.getElementById('descripcion-producto').value.trim();
    const categoria = document.getElementById('categoria').value;
    const precio = document.getElementById('precio').value;
    const imagenUrl = document.getElementById('imagen-url').value; // Obtenemos la URL de la imagen
    //const imagen = document.getElementById('imagen').files[0]; //el archivo se guarda en una lista, por eso se accede al primer elemento de esa lista
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
    /* if (imagen) {
        const maxSize = 1 * 1024 * 1024; // Maximo 1MB en la imagen
        if (imagen.size > maxSize) {
            showAlert('La imagen no puede exceder 1MB.');
            return;
        }
        if (!imagen.type.startsWith('image/')) { //el formato del archivo tiene que ser imagen (MIME TYPE)
            showAlert('El archivo debe ser una imagen.');
            return;
        }
    } */

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
            imagen: imagenUrl//se guarda la URL de la imagen 
        };
    // Obtener productos existentes o iniciar arreglo
       /* let productos = JSON.parse(localStorage.getItem('productos')) || [];
        productos.push(registro);
        // Guardar actualizado
        localStorage.setItem('productos', JSON.stringify(productos)); */
        
        //pendiente comentar 
          const jsonProd=JSON.stringify(registro);
        localStorage.setItem('producto',jsonProd);  

        this.reset();
        //document.getElementById('form').reset();
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