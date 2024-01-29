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
    }); /*en esta funcion traigo la API y vuelco "currency" en la variable moneda que la declare
    globalmente para usarla -- en el array libreriaArticulos vuelco el array de data.products y tambien
    lo declare global para usarla en el resto del codigo*/

    crearTabla(libreriaArticulos); //llamo a la funcion para pintar la primer tabla
    escucharInput().then(() => {
      calcula_total();
    }); // desde escucharInput manejo la logica completa
  }
});
