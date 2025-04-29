const navbar = document.getElementById("navbar")
const footer = document.getElementById("footer")

    navbar.insertAdjacentHTML("afterend",`<nav class="navbar navbar-expand-lg fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="./index.html">Cafetlán</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">

      <div class="centro d-flex mx-auto">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./nosotros.html">Nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./productos.html">Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./formRegistro.html">Regístrate</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./contacto.html">Contáctanos</a>
          </li>
        </ul>
      </div>
<div class="icons d-flex ms-auto ">
        <ul class="navbar-nav">
           <li class="nav-link" >
            <i class="bi bi-cart2"></i>
          </li>
          <li class="nav-link">
          <a href="./login.html" class="color-login">
            <i class="bi bi-person-fill" href="./login.html"></i>
            </a>
          </li>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>`);

    footer.insertAdjacentHTML("beforeend", `
        <footer>
      <div id="tituloFooter">
        <h2>Cafetlán</h2>
      </div>
      <div id="footerDos">
          <div class="proyectoFooter">
            <h3>Proyecto</h3>
            <a href="./nosotros.html" style="text-decoration: none; color: inherit;"><h5>Sobre Nosotros</h5></a>
            <a href="./productos.html" style="text-decoration: none; color: inherit;"><h5>Tienda</h5></a>
            <a href="./formRegistro.html" style="text-decoration: none; color: inherit;"> <h5>Únete</h5></a>
        </div>
        <div id="contactoFooter">
           <a href="./contacto.html" style="text-decoration: none; color: inherit;">  <h3>Contacto</h3></a>
            <h5>Ayuda</h5>
            <h5>Registrate</h5>
            <h5>Marcas</h5>
          </div>
          <div id = "disclaimer"> 
          <p>
    <button type="button" class="btn btn-danger" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="IMPORTANTE: Ésta página solo es un proyecto estudiantil. No se comercia con ningún contenido mostrado aquí.">
  Aviso
</button>

          </div>
      </div>
    </footer>  `)

    //botón de disclaimer popover 
    document.addEventListener('DOMContentLoaded', function () {
      var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
      var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
          return new bootstrap.Popover(popoverTriggerEl);
      });
  });
 