<<<<<<< HEAD
function addItem(item){
    //producto 1.1
const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745952486/Y2FmZUFydGVzYW5hbFR6dWFjYWxsaV9hd3VhYzY=/drilldown" +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">`+Cafe Artesanal T-Zacualli+`</h5>\n' +
        '        <p class="card-text">'+"Venta de café artesanal tostado en comal de barro con leña, orgánico y de altura originario de Zacualpan de Amilpas Morelos. Combinación de Granos y grano caracolillo."+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
        //producto 2
        '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745952490/Q2FmZUNhc2FNYXlvcl9nNTUyZWs=/drilldown" +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+"Cafe Casa Mayor"+'</h5>\n' +
        '        <p class="card-text">'+"Café calidad Pluma, de  variedad Thypica Arábica. Café Planchuela. El café de Huatulco, cultivado en la región costera de Oaxaca, destaca por su sabor suave y afrutado, con notas de nuez y un toque sutil de chocolate. Su origen en tierras altas le otorga una acidez equilibrada y un aroma fresco."+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
                //producto 3
                '<div class="card" style="width: 18rem;">\n' +
                '    <img src="'+"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745952495/Q2FmZURlT2xsYV90b2Z3dGY=/drilldown" +'" class="card-img-top" alt="image">\n' +
                '    <div class="card-body">\n' +
                '        <h5 class="card-title">'+"Cafe Alianza De Olla"+'</h5>\n' +
                '        <p class="card-text">'+"El café Alianza de Olla nos brinda una nostalgia inigualable, al transportarnos a aquella cocina de la abuelita que preparaba el cafecito de la tarde para toda la familia, con ingredientes naturales y deliciosos. Este producto incluye azúcar y canela."+'</p>\n' +
                '        <a href="#" class="btn btn-primary">Add</a>\n' +
                '    </div>\n' +
                '</div>\n' +
                '<br/>';
                //producto 4
                '<div class="card" style="width: 18rem;">\n' +
                '    <img src="'+"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745952493/Q2FmZUZ1c2lvblRyZXNSZWdpb25lc19qZ3p0Zmc=/drilldown" +'" class="card-img-top" alt="image">\n' +
                '    <div class="card-body">\n' +
                '        <h5 class="card-title">'+"Cafe Fusión Tres Regiones"+'</h5>\n' +
                '        <p class="card-text">'+"Mezcla de tres granos de café originarios de Veracruz, Oaxaca y Chiapas fusion de tres regiones(Totonaco, Chontal y Mixe), sabemos la importancia del tostado y el sabor con más de 20 años de experiencia en el arte del tostado con aire caliente."+'</p>\n' +
                '        <a href="#" class="btn btn-primary">Add</a>\n' +
                '    </div>\n' +
                '</div>\n' +
                '<br/>';
                //producto 5
                '<div class="card" style="width: 18rem;">\n' +
                '    <img src="'+"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745952487/Q2FmZUxhY2hpT3JnYW5pY19kdGo1azE=/drilldown" +'" class="card-img-top" alt="image">\n' +
                '    <div class="card-body">\n' +
                '        <h5 class="card-title">'+"Cafe Lachi Organic's"+'</h5>\n' +
                '        <p class="card-text">'+"Te traemos este café criollo, cosechado por maestros artesanos de la región y tostado a la leña que le da un sabor exquisito, producido en la Sierra Norte de Oaxaca, una zona montañosa que integra la Sierra Madre Oriental a 1,200 MSNM.Café Molido Artesanal 100% puro cafe, tueste medio con notas a Caramelo, Chocolate y canela."+'</p>\n' +
                '        <a href="#" class="btn btn-primary">Add</a>\n' +
                '    </div>\n' +
                '</div>\n' +
                '<br/>';
                        //producto 6
        '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745952495/Q2FmZUxhQ3VldmFfcmF3YW1h/drilldown" +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+"Cafe La Cueva"+'</h5>\n' +
        '        <p class="card-text">'+"El café chiapaneco ofrece un perfil delicado con matices dulces y frutales, resultado de su cultivo en tierras ricas y climas de montaña. Es un café artesanal, de cuerpo medio y aroma envolvente. Perfecto para disfrutar en cualquier momento del día."+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
                //producto 7
                '<div class="card" style="width: 18rem;">\n' +
                '    <img src="'+"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745952493/Q2FmZUxhUmVnaW9uX2xucGdkZQ==/drilldown" +'" class="card-img-top" alt="image">\n' +
                '    <div class="card-body">\n' +
                '        <h5 class="card-title">'+"Cafe La Región"+'</h5>\n' +
                '        <p class="card-text">'+"Café chiapaneco, cultivado en las montañas de Chiapas, México, se distingue por su sabor suave, notas florales y toques de chocolate. Producido a gran altura. Es un café de aroma intenso y acidez equilibrada. Ideal para quienes buscan una experiencia auténtica y aromática."+'</p>\n' +
                '        <a href="#" class="btn btn-primary">Add</a>\n' +
                '    </div>\n' +
                '</div>\n' +
                '<br/>';
                        //producto 8
        '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745952495/Y2FmZU11amVyU2VycmFuYV9ibzhla3M=/drilldown" +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+"Cafe Mujer Serrana"+'</h5>\n' +
        '        <p class="card-text">'+"Nuestro café nace en las montañas de la sierra nororiental de Puebla, es cultivado por familia indígenas nahuas y procesado de manera artesanal, dando como resultado un café de altura de excelente calidad. Ideal para preparar café de olla o en cafetera."+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
        //producto 9
        '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745952491/Q2FmZVNhbnRhRWxlbmFfcDdjeWFw/drilldown" +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+"Cafe Santa Elena"+'</h5>\n' +
        '        <p class="card-text">'+"Sabores ácidos y a frutos rojos, cuerpo intenso. Achocolatado, frutos rojos y acidez sutil. Ideal para un espresso con el sabor profundamente achocolatado que sólo los granos de cafe de Veracruz ofrecen. Intenso sabor a café tostado, cuerpo medio."+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
                //producto 10
                '<div class="card" style="width: 18rem;">\n' +
                '    <img src="'+"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745952490/Y2FmZVphcGF0aXN0YV9jZGNiYmc=/drilldown" +'" class="card-img-top" alt="image">\n' +
                '    <div class="card-body">\n' +
                '        <h5 class="card-title">'+"Cafe Zapatista"+'</h5>\n' +
                '        <p class="card-text">'+"Café solidario de comercio justo de Chiapas (México), cultivado con prácticas ecológicas y cosechado con dignidad. Café 100% rebelde, apoya a las cooperativas zapatistas en resistencia."+'</p>\n' +
                '        <a href="#" class="btn btn-primary">Add</a>\n' +
                '    </div>\n' +
                '</div>\n' +
                '<br/>';
                        //producto 11
        '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
                //producto 12
                '<div class="card" style="width: 18rem;">\n' +
                '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
                '    <div class="card-body">\n' +
                '        <h5 class="card-title">'+item.name+'</h5>\n' +
                '        <p class="card-text">'+item.description+'</p>\n' +
                '        <a href="#" class="btn btn-primary">Add</a>\n' +
                '    </div>\n' +
                '</div>\n' +
                '<br/>';
                        //producto 13
        '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
                //producto 14
                '<div class="card" style="width: 18rem;">\n' +
                '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
                '    <div class="card-body">\n' +
                '        <h5 class="card-title">'+item.name+'</h5>\n' +
                '        <p class="card-text">'+item.description+'</p>\n' +
                '        <a href="#" class="btn btn-primary">Add</a>\n' +
                '    </div>\n' +
                '</div>\n' +
                '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}
=======
fetch("../JSON/products.json")
  .then(response => response.json())
  .then(data => {
    localStorage.setItem("miJson", JSON.stringify(data));
    console.log("Json cargado en Local Storage");
  })
  .catch(error => console.error("Error al cargar el JSON", error));
>>>>>>> ec594bd8820094248b80c578bc8f966f7fb78eed

  function addItem(item){
        const itemHTML = '<div class="col-md-4 mb-4"> <div class="card h-100 bg-white shadow">\n' +
            '    <img src="'+item.Image +'" class="card-img-top" alt="image">\n' +
            '    <div class="card-body">\n' +
            '        <h5 class="card-title">'+item.Title+'</h5>\n' +
            '        <p class="card-text">'+item.Category+'</p>\n' +
            '        <a href="#" class="btn btn-primary2">Agregar al carrito</a>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<br/>';
        const itemsContainer = document.getElementById("list-items");
        itemsContainer.innerHTML += itemHTML;
    }
    //itemscafes
    addItem({"id": 1, "Title":"Café Artesanal T-Zacualli", "Región":"Morelos", "Price":320, "Description":"Venta de café artesanal tostado en comal de barro con leña, orgánico y de altura originario de Zacualpan de Amilpas Morelos. Combinación de Granos y grano caracolillo.", "Category":"Cafe Molido", "Image":"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745952486/Y2FmZUFydGVzYW5hbFR6dWFjYWxsaV9hd3VhYzY=/drilldown", "Rating":{"Rate":4.3,"Count":120}},)
    addItem({"id": 2, "Title":"Café Casa Mayor", "Región":"Huatulco",  "Price":385, "Description":"Café calidad Pluma, de  variedad Thypica Arábica. Café Planchuela. El café de Huatulco, cultivado en la región costera de Oaxaca, destaca por su sabor suave y afrutado, con notas de nuez y un toque sutil de chocolate. Su origen en tierras altas le otorga una acidez equilibrada y un aroma fresco.", "Category":"Cafe Molido", "Image":"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745952490/Q2FmZUNhc2FNYXlvcl9nNTUyZWs=/drilldown", "Rating":{"Rate":4.2,"Count":98}},)
    addItem({"id": 3, "Title":"Café Alianza De Olla", "Región":"Veracruz",  "Price":210, "Description":"El café Alianza de Olla nos brinda una nostalgia inigualable, al transportarnos a aquella cocina de la abuelita que preparaba el cafecito de la tarde para toda la familia, con ingredientes naturales y deliciosos. Este producto incluye azúcar y canela.", "Category":"Cafe Molido", "Image":"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745952495/Q2FmZURlT2xsYV90b2Z3dGY=/drilldown", "Rating":{"Rate":4.0,"Count":75}},)
    addItem({"id": 4, "Title":"Café Fusión Tres Regiones", "Región":"Chiapas, Veracruz, Oaxaca",  "Price":280, "Description":"Mezcla de tres granos de café originarios de Veracruz, Oaxaca y Chiapas fusion de tres regiones(Totonaco, Chontal y Mixe), sabemos la importancia del tostado y el sabor con más de 20 años de experiencia en el arte del tostado con aire caliente.", "Category":"Cafe Molido", "Image":"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745952493/Q2FmZUZ1c2lvblRyZXNSZWdpb25lc19qZ3p0Zmc=/drilldown", "Rating":{"Rate":4.5,"Count":200}},)
    addItem({"id": 5, "Title":"Café Lachi Organic's", "Región":"Oaxaca",  "Price":340, "Description":"Te traemos este café criollo, cosechado por maestros artesanos de la región y tostado a la leña que le da un sabor exquisito, producido en la Sierra Norte de Oaxaca, una zona montañosa que integra la Sierra Madre Oriental a 1,200 MSNM.Café Molido Artesanal 100% puro cafe, tueste medio con notas a Caramelo, Chocolate y canela.", "Category":"Cafe Molido", "Image":"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745952487/Q2FmZUxhY2hpT3JnYW5pY19kdGo1azE=/drilldown", "Rating":{"Rate":3.8,"Count":130}},)
    addItem({"id": 6, "Title":"Café La Cueva", "Región":"Chiapas",  "Price":280, "Description":"El café chiapaneco ofrece un perfil delicado con matices dulces y frutales, resultado de su cultivo en tierras ricas y climas de montaña. Es un café artesanal, de cuerpo medio y aroma envolvente. Perfecto para disfrutar en cualquier momento del día.", "Category":"Cafe Molido", "Image":"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745952495/Q2FmZUxhQ3VldmFfcmF3YW1h/drilldown", "Rating":{"Rate":3.5,"Count":120}},)
    addItem({"id": 7, "Title":"Café La Región", "Región":"Chiapas",  "Price":310, "Description":"Café chiapaneco, cultivado en las montañas de Chiapas, México, se distingue por su sabor suave, notas florales y toques de chocolate. Producido a gran altura. Es un café de aroma intenso y acidez equilibrada. Ideal para quienes buscan una experiencia auténtica y aromática.", "Category":"Cafe Molido", "Image":"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745952493/Q2FmZUxhUmVnaW9uX2xucGdkZQ==/drilldown", "Rating":{"Rate":4.2,"Count":95}},)
    addItem({"id": 8, "Title":"Café Mujer Serrana", "Región":"Puebla",  "Price":410, "Description":"Nuestro café nace en las montañas de la sierra nororiental de Puebla, es cultivado por familia indígenas nahuas y procesado de manera artesanal, dando como resultado un café de altura de excelente calidad. Ideal para preparar café de olla o en cafetera.", "Category":"Cafe Molido", "Image":"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745952495/Y2FmZU11amVyU2VycmFuYV9ibzhla3M=/drilldown", "Rating":{"Rate":4.7,"Count":180}},)
    addItem({"id": 9, "Title":"Café Santa Elena", "Región":"Veracruz",  "Price":330, "Description":"Sabores ácidos y a frutos rojos, cuerpo intenso. Achocolatado, frutos rojos y acidez sutil. Ideal para un espresso con el sabor profundamente achocolatado que sólo los granos de cafe de Veracruz ofrecen. Intenso sabor a café tostado, cuerpo medio.", "Category":"Cafe Molido", "Image":"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745952491/Q2FmZVNhbnRhRWxlbmFfcDdjeWFw/drilldown", "Rating":{"Rate":3.9,"Count":150}},)
    addItem({"id": 10, "Title":"Café Zapatista", "Región":"Chiapas",  "Price":320, "Description":"Café solidario de comercio justo de Chiapas (México), cultivado con prácticas ecológicas y cosechado con dignidad. Café 100% rebelde, apoya a las cooperativas zapatistas en resistencia.", "Category":"Cafe Molido", "Image":"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745952490/Y2FmZVphcGF0aXN0YV9jZGNiYmc=/drilldown", "Rating":{"Rate":4.0,"Count":138}},)
    //itemscafeteras
    addItem({"id": 11, "Title":"Cafetera De Peltre p/ 2 lts", "Price":280, "Description":"La cafetera de peltre, con su diseño clásico y resistente, es ideal para preparar café de manera tradicional. Su material asegura una distribución uniforme del calor, garantizando un sabor delicioso en cada taza. Perfecta para disfrutar de una experiencia auténtica y duradera. Ideal para hogares y viajes. Compatible con estufa de inducción", "Category":"Cafeteras", "Image":"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745953834/Q2FmZXRlcmFEZVBlbHRyZV9veGs3ZzQ=/drilldown", "Rating":{"Rate":4.0,"Count":135}},)
    addItem({"id": 12, "Title":"Cafetera De Barro p/ 2 lt.", "Price":210, "Description":"Fabricada pro artesanos de Puebla (Zona de los Volcanes), esta cafetera/Tetera con capacidad de 2 lt. Aportara un sabor inigualable a sus preparaciones, libre de plomo, debe curarse antes de utilizarse. ", "Category":"Cafeteras", "Image":"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745953833/Q2FmZXRlcmFEZUJhcnJvX2R1ZHN3eQ==/drilldown", "Rating":{"Rate":3.5,"Count":50}},)
    addItem({"id": 13, "Title":"Cafetera De Prensa Francesa Casa Litus p/ 2 lts", "Price":649, "Description":"PREPARA DELICIOSO CAFÉ CON EL MÉTODO MÁS ELEGANTE: Para elaborar café con la prensa francesa sólo tienes que agregar café molido y agua caliente. Mezcla por dos minutos y presiona lentamente el filtro al finalizar y tendrás delicioso café recién preparado en pocos minutos", "Category":"Cafeteras", "Image":"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745953834/Q2FmZXRlcmFQcmVuc2FGcmFuY2VzYV9iZGJyYWw=/drilldown", "Rating":{"Rate":4.3,"Count":180}},)
    addItem({"id": 14, "Title":"Cafetera De Prensa Italiana p/ 6 tazas", "Price":1199, "Description":"Diseño duradero e innovador: cuidadosamente fabricado con aluminio fuerte y duradero. Proporciona una distribución completa y uniforme del calor para mejorar el sabor y el aroma", "Category":"Cafeteras", "Image":"https://res-console.cloudinary.com/dzlbldti5/thumbnails/v1/image/upload/v1745953834/Q2FmZXRlcmFQcmVuc2FJdGFsaWFuYV9qYXprdjg=/drilldown", "Rating":{"Rate":4.7,"Count":250}},)
    addItem({"id": 14, "Title":"Chefman Cafetera por Goteo p/ 12 tazas", "Price":899, "Description":"Capacidad de 12 tazas Prepara el café a tu manera, cuando quieras y con la intensidad que desees! Programa tu cafetera Chefman con hasta 24 horas", "Category":"Cafeteras", "Image":"https://chefman.com.mx/cdn/shop/products/square-coffee-maker-medium-stainless-steel-8_4b4efdb3-864b-40b9-945e-6b57f4bc9f02.jpg?v=1640810840&width=1080", "Rating":{"Rate":4.7,"Count":350}})
    
    