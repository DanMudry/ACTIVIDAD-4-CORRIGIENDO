let libreriaArticulos = [];
let array_del_carro = [];
let carro_activado = false;
let moneda = "";

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://jsonblob.com/api/jsonBlob/1193194277579907072")
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
    escucharInput();
    console.log("aca nunca vuelvo************************************");
  }
});
//modificando
