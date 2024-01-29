let libreriaArticulos = [];
let array_del_carro = [];
let carro_activado = false;
let moneda = "";
let mi_Total;

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://jsonblob.com/api/jsonBlob/1200241940141826048")
    .then((response) => response.json())
    .then((data) => {
      tomar_los_datos(data.products, data.currency);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  function tomar_los_datos(array, tipo) {
    moneda = tipo;
    array.forEach((nuevoArticulo) => {
      libreriaArticulos.push(nuevoArticulo);
    });

    crearTabla(libreriaArticulos);
    escucharInput().then(() => {
      maldito_total();
    });
  }
});
