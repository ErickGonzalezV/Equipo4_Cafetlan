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