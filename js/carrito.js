function addItemSesionStorage(ProductoSeleccionado) {
    const itemHTML = `





        `;

    const itemsContainer = document.getElementById("product-container-local");
    itemsContainer.innerHTML += itemHTML;

    guardarProductoEnSesionStorage(ProductoSeleccionado);

}

    