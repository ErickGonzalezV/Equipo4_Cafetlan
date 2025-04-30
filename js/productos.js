function addItem(item) {
    // Crear el HTML para mostrar el producto en la interfaz
    const itemHTML = `
        <div class="col">
            <div class="card h-100" style="width: 18rem; margin: auto;">
                <img src="${item.img}" class="card-img-top" alt="image">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <a href="#" class="btn btn-primary mt-auto" onclick="agregarAlCarrito(${JSON.stringify(item)})">Agregar al carrito</a>
                </div>
            </div>
        </div>
    `;
    const itemsContainer = document.getElementById("product-container");
    itemsContainer.innerHTML += itemHTML;

    // Guardar el producto en el localStorage
    guardarProductoEnLocalStorage(item);
}

function guardarProductoEnLocalStorage(item) {
    // Recuperar los productos del localStorage, o inicializar un array vacío si no hay datos
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    
    // Agregar el nuevo producto al array
    productos.push(item);

    // Guardar el array actualizado en el localStorage
    localStorage.setItem('productos', JSON.stringify(productos));
}
// Lista de productos
addItem({
    name: "Cafe Artesanal T-Zacualli",
    img: "https://th.bing.com/th/id/R.ead1c26842a30f348f8d1194cf2c3c19?rik=QILow0Juljya8g&riu=http%3a%2f%2f3.bp.blogspot.com%2f-SMWUIYyH-PI%2fVhHXoQBCk1I%2fAAAAAAAABGw%2fVI2bFf05IJc%2fs1600%2funtitled-25-14-1.jpg&ehk=C6G9oXjT65%2fdNkyoBMjeNSpnc0YpG1a0e19QaeCuTQo%3d&risl=&pid=ImgRaw&r=0",
    description: "Venta de café artesanal tostado en comal de barro con leña, orgánico y de altura originario de Zacualpan de Amilpas Morelos. Combinación de Granos y grano caracolillo."
});

addItem({
    name: "Cafe Casa Mayor",
    img: "https://i2.wp.com/www.cafecasamayor.com/wp-content/uploads/2021/04/IMG_0689.jpg?fit=960%2C720&ssl=1",
    description: "Café calidad Pluma, de variedad Thypica Arábica. Café Planchuela. Sabor suave y afrutado, con notas de nuez y chocolate."
});

addItem({
    name: "Cafe Alianza De Olla",
    img: "https://hebmx.vtexassets.com/arquivos/ids/671496-800-800?v=638521703397370000&width=800&height=800&aspect=true",
    description: "Café con azúcar y canela. Nostalgia inigualable, como el que preparaba la abuelita para la familia."
});

addItem({
    name: "Cafe Fusión Tres Regiones",
    img: "https://th.bing.com/th/id/OIP.emDs1ttm5ViftMhkmG5_twHaNL?rs=1&pid=ImgDetMain",
    description: "Fusión de granos de Veracruz, Oaxaca y Chiapas. Tostado con más de 20 años de experiencia."
});

addItem({
    name: "Cafe Lachi Organic's",
    img: "https://m.media-amazon.com/images/I/719sPpDpEGL._AC_SL1500_.jpg",
    description: "Café criollo tostado a la leña. Notas de caramelo, chocolate y canela."
});

addItem({
    name: "Cafe La Cueva",
    img: "https://http2.mlstatic.com/cafe-de-chiapas-de-altura-puro-y-organico-D_NQ_NP_631625-MLM25464309031_032017-F.jpg",
    description: "Perfil delicado, matices dulces y frutales. Cultivado en climas de montaña de Chiapas."
});

addItem({
    name: "Cafe La Región",
    img: "https://th.bing.com/th/id/OIP.Vfe5h9wLKaBvLFaMr-6ovAHaJ8?rs=1&pid=ImgDetMain",
    description: "Café chiapaneco con sabor suave, notas florales y toques de chocolate."
});

addItem({
    name: "Cafe Mujer Serrana",
    img: "https://th.bing.com/th/id/OIP.a-1Dfm1iXzCmOGC3l1uMpwHaHW?rs=1&pid=ImgDetMain",
    description: "Cultivado por familias indígenas nahuas en Puebla. Procesado de manera artesanal."
});

addItem({
    name: "Cafe Santa Elena",
    img: "https://th.bing.com/th/id/OIP.DFP0PWyd02Tx7UMyM_Ay8gHaHa?rs=1&pid=ImgDetMain",
    description: "Café de Veracruz con sabor achocolatado, acidez sutil y notas a frutos rojos."
});

addItem({
    name: "Cafe Zapatista",
    img: "https://schoolsforchiapas.org/wp-content/uploads/2014/04/20230705_133747si-1024x1024.jpg",
    description: "Café solidario y de comercio justo de Chiapas. Cultivado con prácticas ecológicas."
});

addItem({
    name: "Cafetera De Peltre p/ 2 lts",
    img: "https://m.media-amazon.com/images/I/51v63G5FM1S._AC_SL1000_.jpg",
    description: "Diseño clásico, ideal para preparar café tradicional. Compatible con estufa de inducción."
});

addItem({
    name: "Cafetera De Barro p/ 2 lt.",
    img: "https://http2.mlstatic.com/D_NQ_NP_803876-MLM71312557298_082023-O.webp",
    description: "Hecha por artesanos poblanos. Aporta sabor único, libre de plomo."
});

addItem({
    name: "Cafetera De Prensa Francesa Casa Litus p/ 2 lts",
    img: "https://www.cyberpuerta.mx/img/product/XL/CP-CASALITUS-83236-Bl-1.jpg",
    description: "Método elegante para preparar café. Simple, rápido y delicioso."
});

addItem({
    name: "Cafetera De Prensa Italiana p/ 6 tazas",
    img: "https://i5-mx.walmartimages.com/mg/gm/3pp/asr/d24a4ef1-819c-494a-abdc-65bb2ab59ead.01a0b2befa7a1f74fa1139f235b28203.jpeg",
    description: "Fabricada con aluminio duradero. Proporciona distribución uniforme del calor."
});

addItem({
    name: "Chefman Cafetera por Goteo p/ 12 tazas",
    img: "https://chefman.com.mx/cdn/shop/products/square-coffee-maker-medium-stainless-steel-8_4b4efdb3-864b-40b9-945e-6b57f4bc9f02.jpg",
    description: "Capacidad de 12 tazas. Programable hasta 24 horas. Ajusta la intensidad a tu gusto."
});
