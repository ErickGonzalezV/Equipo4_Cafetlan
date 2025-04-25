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
          
            <i class="bi bi-cart2"></i>
          </li>
          <li class="nav-link">
          <a href="./login.html">
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
            <h5>Sobre Nosotros</h5>
            <h5>Tienda</h5>
            <h5>Únete</h5>
        </div>
        <div id="contactoFooter">
            <h3>Contacto</h3>
            <h5>Ayuda</h5>
            <h5>Registrate</h5>
            <h5>Marcas</h5>
          </div>
          <div id = "disclaimer"> 
          <p>
  <button class="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Aviso
  </button>
</p>
<div style="min-height: 120px;">
  <div class="collapse collapse-horizontal" id="collapseWidthExample">
    <div class="card card-body" style="width: 300px;">
      IMPORTANTE: Ésta página solo es un proyecto estudiantil. No se comercia con ningún contenido mostrado aquí. 
    </div>
  </div>
</div>
          </div>
      </div>
    </footer>  `)
 