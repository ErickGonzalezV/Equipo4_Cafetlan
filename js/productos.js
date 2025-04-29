fetch("../JSON/products.json")
  .then(response => response.json())
  .then(data => {
    localStorage.setItem("miJson", JSON.stringify(data));
    console.log("Json cargado en Local Storage");
  })
  .catch(error => console.error("Error al cargar el JSON", error));

/* <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <p>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
      Toggle width collapse
    </button>
  </p>
  <div style="min-height: 120px;">
    <div class="collapse collapse-horizontal" id="collapseWidthExample">
      <div class="card card-body" style="width: 300px;">
        This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
        <button type="button" class="btn btn-outline-primary">Primary</button>
      </div>
    </div>
  </div>
    </div>
  </div> */