function escucharInput() {
  const escucha = document.getElementById("cuerpoTabla");
  escucha.classList.add("miInputEstilizado");

  escucha.addEventListener("input", (event) => {
    const targetEs = event.target;
    targetEs.classList.add("miInputEstilizado");

    const dataIde = targetEs.dataset.id;

    const queHago = targetEs.id;

    const inputCantidad = document.querySelector('[data-id="' + dataIde + '"]');
    const celdaCantidad = document.querySelector(
      '[data-id="' + dataIde + '-cantidad"]'
    );
    const celdaSubTotal = document.querySelector('[data-id="' + dataIde + '"]');
    const nuevoValor = Math.max(0, inputCantidad.value);
    inputCantidad.value = nuevoValor;

    const modificaPrecio = document.getElementById(dataIde);
    const precioArticulo = libreriaArticulos.find(
      (articuloBuscado) => articuloBuscado.SKU === dataIde
    );

    modificaPrecio.textContent =
      (inputCantidad.value * precioArticulo.price).toFixed(2) + moneda;

    const indice_del_articulo = array_del_carro.findIndex(
      (producto) => producto.sku === dataIde
    );
    console.log(
      "Indice " + indice_del_articulo + "Valor " + inputCantidad.value
    );

    if (indice_del_articulo !== -1) {
      modificarCarro(indice_del_articulo, inputCantidad.value);
    } else {
      if (indice_del_articulo == -1 && inputCantidad.value != 0) {
        carro_activado = true;
        agregarAlCarro(dataIde, inputCantidad.value, precioArticulo.price);
        armar_Tabla_Carro(array_del_carro.length - 1);
      }
    }
    const mi_Total = sumar_Total_Carro(array_del_carro).toFixed(2);

    const poner_Total = document.getElementById("pongo_Total");
    poner_Total.textContent = mi_Total;
  });
} //aca termina el listenner del Input}
