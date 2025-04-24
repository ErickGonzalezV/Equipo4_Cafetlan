/* const nombre = document.getElementById("name");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let isValid = true;

if(nombre.value.length < 3){ 
     isValid = false; //significa que no paso la validacion
    nombre.style.border = "solid 3px red";
    //revisar el alert y  ponerlo en block , primero hay que definir la variable arriba pegando el nombre del id 
     alertValidaciones.style.display = "block"; //esto es para mostrar el contenedor

   }  */

     /* const name = document.getElementById("name");
     const errorNombre = document.getElementById("error-nombre");

     function validarNombre(name) {
        const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    if (errorNombre.length <3 ) {
      return errorNombre.style.border = "solid 3px red";
    }
    if (!soloLetras.test(nombre)){
        return errorNombre.style.border = "solid 3px red";
    } else {
        `${name}`;
    }
    
       }
       printInfo(errorNombre){
        errorNombre.insertAdjacentHTML();
       }
    
       validarNombre();
 */

       const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_73jj9hz';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});