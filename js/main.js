const navbar = document.getElementById("navbar")
const footer = document.getElementById("footer")

const inicioSesion = JSON.parse(sessionStorage.getItem("Usuario"));

if (!inicioSesion) {
  navbar.insertAdjacentHTML("afterend", `
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="./index.html">Cafetlán</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">

      <div class="centro d-flex mx-auto">
        <ul class="navbar-nav d-flex gap-5">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="./nosotros.html">Nosotros</a>
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

        <ul class="navbar-nav d-flex gap-5">
          <li class="nav-link" >
          <a href = "./carrito.html" class = "color-carrito">
            <i class="bi bi-cart2" href = "./carrito.html"></i>
          </a>
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

    <style>
        .nav-link {
            font-size: 1.2rem; 
            padding: 10px 20px; 
            color: #333; 
            transition: color 0.3s ease, background-color 0.3s ease; 
            border-radius: 5px; 
        }
        .nav-link:hover {
            color: #fff; 
            background-color: #6b705c; 
        }
              .color-carrito {
  color: #3B3923;
}
        /* Responsividad */
        @media (max-width: 768px) {
            .nav-link {
                font-size: 1.2rem; 
                padding: 8px 15px;
            }
        }
        @media (max-width: 576px) {
            .nav-link {
                font-size: 1rem; 
                padding: 6px 12px;
            }


        .icons ul {
            list-style: none; 
            padding: 0; 
        }
        .icons .nav-link i {
            font-size: 2rem; 
            color: #333; 
            transition: color 0.3s ease; 
        }
        .icons .nav-link i:hover {
            color: #6b705c; 
        }
        /* Responsividad */
        @media (max-width: 768px) {
            .icons .nav-link i {
                font-size: 1.5rem; 
            }
        }
        @media (max-width: 576px) {
            .icons .nav-link i {
                font-size: 1.2rem; 
            }
        }
    </style>

</nav>`);
} else {
  navbar.insertAdjacentHTML("afterend", `<nav class="navbar navbar-expand-lg sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="./index.html">Cafetlán</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">

      <div class="navbar-nav mx-auto d-flex gap-5 justify-content-center">
        <ul class="navbar-nav d-flex gap-5">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./nosotros.html">Nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./productos.html">Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./contacto.html">Contáctanos</a>
          </li>
        </ul>
      </div>

  <div class="icons d-flex ms-auto ">
        <ul class="navbar-nav d-flex gap-5">
          <li class="nav-link" >
            <i class="bi bi-cart2"></i>

          </li>
   <li class="nav-link d-flex align-items-center">
  <span class="fw-bold me-3" style="color: #3B3923;">Hola, ${inicioSesion.nombre}</span>
  <button class="btn btn-sm" style="background-color:#736F4E; color:#B4C292; border: none; border-radius: 4px; font-size: 1.2rem;" onclick="cerrarSesion()">Cerrar sesión</button>
</li>

        </ul>
      </div>
    </div>
  </div>
   <style>
        .nav-link {
            font-size: 1.2rem; 
            padding: 10px 20px; 
            color: #333; 
            transition: color 0.3s ease, background-color 0.3s ease; 
            border-radius: 5px; 
        }
        .nav-link:hover {
            color: #fff; 
            background-color: #6b705c; 
        }
        /* Responsividad */
        @media (max-width: 768px) {
            .nav-link {
                font-size: 1.2rem; 
                padding: 8px 15px;
            }
        }
        @media (max-width: 576px) {
            .nav-link {
                font-size: 1rem; 
                padding: 6px 12px;
            }


        .icons ul {
            list-style: none; 
            padding: 0; 
        }
        .icons .nav-link i {
            font-size: 2rem; 
            color: #333; 
            transition: color 0.3s ease; 
        }
        .icons .nav-link i:hover {
            color: #6b705c; 
        }
        /* Responsividad */
        @media (max-width: 768px) {
            .icons .nav-link i {
                font-size: 1.5rem; 
            }
        }
        @media (max-width: 576px) {
            .icons .nav-link i {
                font-size: 1.2rem; 
            }
        }
    </style>

</nav>`);
}

footer.insertAdjacentHTML("beforeend", `
        <footer>
      <div id="tituloFooter">
        <h2>Cafetlán</h2>
      </div>
      <div id="footerDos">
      <div id="contactoFooter">
      <h3>Aviso legal</h3>
          <button type="button" class="btn btn-danger" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="IMPORTANTE: Ésta página solo es un proyecto estudiantil. No se comercia con ningún contenido mostrado aquí.">
        Aviso
          </button>
          </div>
          <div class="proyectoFooter">
            <h3>Proyecto</h3>
            <a href="./nosotros.html" style="text-decoration: none; color: inherit;"><h5>Sobre Nosotros</h5></a>
            <a href="./formRegistro.html" style="text-decoration: none; color: inherit;"> <h5>Únete</h5></a>
        </div>
      </div>
    </footer>  `)
    //cuando el ususario inicia sesion agrega sus productos al form
    if (inicioSesion) {
  const btnPlus = document.getElementById("btnPlus");
  if (btnPlus) {
    btnPlus.style.display = "flex";
  }
}

//cerrar sesión
function cerrarSesion() {
  sessionStorage.removeItem("Usuario");
  window.location.href = "login.html";
}
//botón de disclaimer popover 
document.addEventListener('DOMContentLoaded', function () {
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
});