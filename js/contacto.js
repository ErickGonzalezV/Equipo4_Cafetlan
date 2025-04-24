const btn = document.getElementById('btnEnviar');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    /**Aquí están declaradas las variables */
    let nombre = document.getElementById('nombre').value.trim();
    let email = document.getElementById('email').value.trim();
    let mensaje = document.getElementById('mensaje').value.trim();
    let telefono = document.getElementById('telefono').value.trim();

    /*Aquí se tienen que insertar las validaciones*/
    if (nombre === '' || email === '' || mensaje === '' || telefono === "") {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos antes de enviar."
      });
      return;
    }

    // Validación nombre
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]+$/;
    if (nombre.length < 3) {
      Swal.fire({
        icon: "error",
        title: "Nombre muy corto",
        text: "El nombre debe tener al menos 3 letras."
      });
      return;
    } else if (!regexNombre.test(nombre)) {
      Swal.fire({
        icon: "error",
        title: "Nombre inválido",
        text: "El nombre no puede contener números ni caracteres especiales."
      });
      return;
    }

    // Validación de email con expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      Swal.fire({
        icon: "error",
        title: "Campo vacío",
        text: "Por favor ingresa un correo electrónico."
      });
      return;
    } else if (!email.includes("@")) {
      Swal.fire({
        icon: "error",
        title: "Correo inválido",
        text: "Tu correo debe contener un '@'."
      });
      return;
    } else if (!email.includes(".")) {
      Swal.fire({
        icon: "error",
        title: "Correo incompleto",
        text: "Tu correo debe contener un dominio como '.com'."
      });
      return;
    } else if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Correo electrónico inválido",
        text: "El correo no tiene un formato válido."
      });
      return;
    }
/////////////////////////////////fin de la validacion de email////////////////////////////////

  //Validación teléfono
  const regexNumber = new RegExp ("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,5}$");
    if (telefono === "") {
        Swal.fire({
            title: "Algo sucedió!",
            text: "El número proporcionado no es válido.",
            icon: "error"
            });
            return;
    } else if (!regexNumber.test(telefono)) {
            Swal.fire({
            title: "¡Listo!",
            text: "Tu número telefónico fue validado",
            icon: "success"
            });
            return;
          } //Termina validación teléfono


    // Validación de mensaje  con expresion regular
    const mensajeRegex = /^[A-Za-z][A-Za-z0-9 "$%()&*?¿!¡/]*$/;
    if (!mensajeRegex.test(mensaje)) {
      alert("el mensaje es invalido");
  }else{
      alert("el mensaje es valido");
  }//fin validación mensaje


    btn.textContent = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_73jj9hz';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.textContent = 'Enviar';
        Swal.fire({
          icon: "success",
          title: "¡Enviado!",
          text: "Tu mensaje fue enviado con éxito."
        });
      })
      .catch((err) => {
        btn.textContent = 'Enviar';
        Swal.fire({
          icon: "error",
          title: "Error al enviar",
          text: "Ocurrió un problema: " + JSON.stringify(err)
        });
      });
  });
