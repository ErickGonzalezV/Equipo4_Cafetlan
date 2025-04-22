const Nombre = document.getElementById("name");
const btnEnviar = document.getElementById("btnEnviar");
const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]+$/;

btnEnviar.addEventListener("click", function (event){
    event.preventDefault();
    Nombre.value = Nombre.value.trim();
    if( Nombre.value.length<3 ){
    
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El nombre es muy corto",
        });

    } else if (!regexNombre.test(Nombre.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El nombre no puede contener números.",
    });
}
}); 