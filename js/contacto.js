const btn = document.getElementById('btnEnviar');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   /**Aquí están declaradas las variables */
    let nombre = document.getElementById('nombre').value.trim();
    let email = document.getElementById('email').value.trim();
    let mensaje = document.getElementById('mensaje').value.trim();
    let telefono = document.getElementById('telefono').value.trim();

     /*Aquí se tienen que insertar las validaciones*/
     if (nombre === '' || email === '' || mensaje === '' || telefono === "") {
        alert('Por favor, completa todos los campos.');
        return;
      }
  
      //Validación nombre
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
      if (!emailRegex.test(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
      }
  

   btn.textContent = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_73jj9hz';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.textContent = 'Enviar';
      alert('Sent!');
    }, (err) => {
      btn.textContent = 'Enviar';
      alert(JSON.stringify(err));
    });
});

