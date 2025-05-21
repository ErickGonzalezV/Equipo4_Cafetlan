// Leer datos de localStorage
const jsonProd = localStorage.getItem('productos');
const prodNuevo = jsonProd ? JSON.parse(jsonProd) : [];
const jsonProdAgregado = localStorage.getItem('producto');
const prodAgregado = jsonProdAgregado ? JSON.parse(jsonProdAgregado) : [];

function addItem(item) {
    const itemHTML = `
<div class="col-md-4 mb-3">
        <div class="card h-100 shadow" style="border-radius: 20px; padding-top: 30px; min-height: 80px;">
        <div style="background: white; padding: 12px; border-radius: 15px; width: 100%; height: 260px; display: flex; align-items: center; justify-content: center; overflow: hidden; margin-bottom: 10px;">
        <img src="${item.img}" alt="image" style="max-height: 100%; max-width: 100%; object-fit: contain; border-radius: 10px;">
        </div>
        <div class="card-body d-flex flex-column px-3" style="padding-top: 0;">
        <h5 class="card-title mb-4">${item.name}</h5>
        <p class="card-text mb-2">${item.description}</p>
        <p class="card-text mb-0"><strong>Precio: $${item.price} MXN</strong></p>
        <a href="#" class="btn btn-primary mt-auto" onclick='agregarAlCarrito(${JSON.stringify(item)})'>Agregar al carrito</a>
        </div>
        </div>
        <br/>
    </div>
    `;
    const itemsContainer = document.getElementById("product-container");
    itemsContainer.innerHTML += itemHTML;

    guardarProductoEnLocalStorage(item);
} //termina primera parte cometnada   

/* function addItem2(item) {
    // Crear el HTML para mostrar el producto en la interfaz
    const itemHTML = `
            <div class="col-md-4 mb-4"> <div class="card h-100 bg-white shadow">
                <img src="${prodNuevo.imagen}" class="card-img-top" alt="image">
                <div class="card-body">
                    <h5 class="card-title">${prodNuevo.nombre}</h5>
                    <p class="card-text">${prodNuevo.descripcion}</p>
                    <p class="card-text">Precio: $${prodNuevo.precio}</p>
                    <a href="#" class="btn btn-primary mt-auto" onclick="agregarAlCarrito(${JSON.stringify(item)})">Agregar al carrito</a>
                </div>
            </div>
        <br/>
    `;
    const itemsContainer = document.getElementById("product-container");
    itemsContainer.innerHTML += itemHTML;
      // Guardar el producto en el localStorage
    guardarProductoEnLocalStorage(item);
}   */

function guardarProductoEnLocalStorage(item) {
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    productos.push(item);
    localStorage.setItem('productos', JSON.stringify(productos));
}

function addItemLocalStorage(objeto) {
    const itemHTML = `
    <div class="col-md-4 mb-3">
         <div class="card h-100 shadow" style="border-radius: 20px; padding-top: 30px; min-height: 80px;">
        <div style="background: white; padding: 12px; border-radius: 15px; width: 100%; height: 260px; display: flex; align-items: center; justify-content: center; overflow: hidden; margin-bottom: 10px;">
            <img src="${objeto.img}" alt="image" style="max-height: 100%; max-width: 100%; object-fit: contain; border-radius: 10px;">
            <div class="card-body d-flex flex-column px-3" style="padding-top: 0;">
                <h5 class="card-title mb-4">${objeto.nombre}</h5>
                <p class="card-text mb-2">${objeto.descripcion}</p>
                <p class="card-text mb-0">Precio: $${objeto.precio}</p>
                <a href="#" class="btn btn-primary mt-auto" onclick="agregarAlCarrito(${JSON.stringify(objeto)})">Agregar al carrito</a>
            </div>
        </div>
        <br/>
    </div>
    `;
    const itemsContainer = document.getElementById("product-container-local");
    itemsContainer.innerHTML += itemHTML;

    guardarProductoEnLocalStorage2(objeto);
}

function guardarProductoEnLocalStorage2(objeto) {
    let productos = JSON.parse(localStorage.getItem('producto'));
    if (!Array.isArray(productos)) {
        productos = [];
    }
    productos.push(objeto);
    localStorage.setItem('producto', JSON.stringify(productos));
}

function mostrarProductosDeLocalStorage() {
    let productos = JSON.parse(localStorage.getItem('producto'));
    if (!Array.isArray(productos)) {
        productos = [];
    }

    const itemsContainer = document.getElementById("product-container-local");
    if (!itemsContainer) {
        console.error("El contenedor 'product-container-local' no se encontró en el DOM.");
        return;
    }

    itemsContainer.innerHTML = '';

    productos.forEach(producto => {
        const itemHTML = `
                <div class="col-md-4 mb-4">
                    <div class="card h-100 shadow" style="border-radius: 20px; padding-top: 30px; min-height: 80px;">
                    <div style="background: white; padding: 12px; border-radius: 15px; width: 100%; height: 260px; display: flex; align-items: center; justify-content: center; overflow: hidden; margin-bottom: 10px;">
                    <img src="${producto.img || producto.imagen || ''}" alt="image" style="max-height: 100%; max-width: 100%; object-fit: contain; border-radius: 10px;">
                </div>
                    <div class="card-body d-flex flex-column px-3" style="padding-top: 0;">
                        <h5 class="card-title mb-4">${producto.nombre || 'Sin nombre'}</h5>
                        <p class="card-text mb-2">${producto.descripcion || 'Sin descripción'}</p>
                        <p class="card-text mb-0">Precio: $${producto.precio || 0}</p>
                        <a href="#" class="btn btn-primary mt-auto" onclick="agregarAlCarrito(${JSON.stringify(producto)})">Agregar al carrito</a>
                        </div>
                    </div>
                <br/>
            </div>
        `;
        itemsContainer.innerHTML += itemHTML;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductosDeLocalStorage();
});

// Lista de productos
addItem({
    name: "Café Artesanal T-Zacualli",
    img: "https://res.cloudinary.com/dzlbldti5/image/upload/v1747073062/IMAGEN_1_EDITADA-Photoroom_bcij9r.jpg",
    description: "Venta de café artesanal tostado en comal de barro con leña, orgánico y de altura originario de Zacualpan de Amilpas Morelos. Combinación de Granos y grano caracolillo.",
    price: 200,
});

addItem({
    name: "Café Casa Mayor",
    img: "https://res.cloudinary.com/dzlbldti5/image/upload/v1747844049/bolsaCafe_m6yupi.jpg",
    description: "Café calidad Pluma, de variedad Thypica Arábica. Café Planchuela. Sabor suave y afrutado, con notas de nuez y chocolate.",
    price: 370,
});

addItem({
    name: "Café Alianza De Olla",
    img: "https://hebmx.vtexassets.com/arquivos/ids/671496-800-800?v=638521703397370000&width=800&height=800&aspect=true",
    description: "Café con azúcar y canela. Nostalgia inigualable, como el que preparaba la abuelita para la familia.",
    price: 228,
});

addItem({
    name: "Café Toxtla",
    img: "https://res.cloudinary.com/dzlbldti5/image/upload/v1747612322/cafeToxtla-fotor-bg-remover-2025051817517_srckrg.png",
    description: "Te ofrecemos nuestro café artesanal; tostamos el café en hornos de tabique, utilizamos cazuelas para tostar, estamos preservando la calidad tradicional y artesanal del café.",
    price: 400,
});

addItem({
    name: "Ensueño Mixteco",
    img: "https://res.cloudinary.com/dzlbldti5/image/upload/v1747591620/cafeartesanalmixteco_resized_htms3w.png",
    description: "Nuestro café es 100% arábica y es cultivado en la Sierra Madre Oriental de Puebla, dulce, afrutado, con intensa acidez y dulzor cítrico.",
    price: 450,
});

addItem({
    name: "Café La Cueva",
    img: "https://res.cloudinary.com/dzlbldti5/image/upload/v1747073066/IMAGEN_6_EDITADA-Photoroom_zwop34.jpg",
    description: "Perfil delicado, matices dulces y frutales. Cultivado en climas de montaña de Chiapas.",
    price: 240,
});

addItem({
    name: "Café La Región",
    img: "https://res.cloudinary.com/dzlbldti5/image/upload/v1747073066/IMAGEN_7_EDITADA-Photoroom_hmn9bi.jpg",
    description: "Café chiapaneco con sabor suave, notas florales y toques de chocolate.",
    price: 250,
});

addItem({
    name: "Café Mujer Serrana",
    img: "https://res.cloudinary.com/dzlbldti5/image/upload/v1747073066/IMAGEN_8_EDITADA-Photoroom_cwf1cy.jpg",
    description: "Cultivado por familias indígenas nahuas en Puebla. Procesado de manera artesanal.",
    price: 230,
});

addItem({
    name: "Café Santa Elena",
    img: "https://th.bing.com/th/id/OIP.DFP0PWyd02Tx7UMyM_Ay8gHaHa?rs=1&pid=ImgDetMain",
    description: "Café de Veracruz con sabor achocolatado, acidez sutil y notas a frutos rojos.",
    price: 700,
});

addItem({
    name: "Café Zapatista",
    img: "https://res.cloudinary.com/dzlbldti5/image/upload/v1747073062/IMAGEN_10_EDITADA-Photoroom_d6oz3n.jpg",
    description: "Café solidario y de comercio justo de Chiapas. Cultivado con prácticas ecológicas.",
    price: 313,
});

addItem({
    name: "Cafetera De Peltre p/ 2 lts",
    img: "https://m.media-amazon.com/images/I/51v63G5FM1S._AC_SL1000_.jpg",
    description: "Diseño clásico, ideal para preparar café tradicional. Compatible con estufa de inducción.",
    price: 400,
});

addItem({
    name: "Cafetera De Barro p/ 2 lt.",
    img: "https://http2.mlstatic.com/D_NQ_NP_803876-MLM71312557298_082023-O.webp",
    description: "Hecha por artesanos poblanos. Aporta sabor único, libre de plomo.",
    price: 590,
});

addItem({
    name: "Cafetera De Prensa Francesa Casa Litus p/ 2 lts",
    img: "https://www.cyberpuerta.mx/img/product/XL/CP-CASALITUS-83236-Bl-1.jpg",
    description: "Método elegante para preparar café. Simple, rápido y delicioso.",
    price: 649,
});

addItem({
    name: "Cafetera De Prensa Italiana p/ 6 tazas",
    img: "https://i5-mx.walmartimages.com/mg/gm/3pp/asr/d24a4ef1-819c-494a-abdc-65bb2ab59ead.01a0b2befa7a1f74fa1139f235b28203.jpeg",
    description: "Fabricada con aluminio duradero. Proporciona distribución uniforme del calor.",
    price: 993,
});

addItem({
    name: "Chefman Cafetera por Goteo p/ 12 tazas",
    img: "https://chefman.com.mx/cdn/shop/products/square-coffee-maker-medium-stainless-steel-8_4b4efdb3-864b-40b9-945e-6b57f4bc9f02.jpg",
    description: "Capacidad de 12 tazas. Programable hasta 24 horas. Ajusta la intensidad a tu gusto.",
    price: 1179,
});

// Mostrar productos agregados por el formulario
/*  const productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];

productosGuardados.forEach(producto => {
    addItem({
        name: producto.nombre,
        img: producto.imagen,
        description: producto.descripcion,
        price: producto.precio
    });
});
 */
