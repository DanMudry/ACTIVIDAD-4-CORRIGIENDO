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

    if (inputCantidad.value >= 0) {
      //que comience el if controlando inputCantidad.value
      const modificaPrecio = document.getElementById(dataIde);
      const precioArticulo = libreriaArticulos.find(
        (articuloBuscado) => articuloBuscado.SKU === dataIde
      );

      modificaPrecio.textContent =
        (inputCantidad.value * precioArticulo.price).toFixed(2) + moneda;

      /*const indice_del_articulo = array_del_carro.findIndex(
        (producto) => producto.sku === dataIde
      ); <== quise hacerlo asi pero no

      !!!FELIX!!! no se por que esto me daba un (-1) siendo que el articulo estaba, entonces
      se me iba a la funcion agregarAlCarro, siendo que no tenia que ir, de esa manera me pintaba
      un nodo nuevo y bueno.... recurri a mi buen amigo de toda la vida el For comun y silvestre, he tirado
      unas cuantas horas con esto. Sorry!!! */
      indice_del_articulo = -1;
      for (let i = 0; i < array_del_carro.length; i++) {
        if (array_del_carro[i].sku === dataIde) {
          indice_del_articulo = i;
          i = array_del_carro.length;
        }
      }

      if (indice_del_articulo !== -1) {
        modificarCarro(indice_del_articulo, inputCantidad.value, dataIde);
      } else {
        carro_activado = true;
        agregarAlCarro(dataIde, inputCantidad.value, precioArticulo.price);
        armar_Tabla_Carro(array_del_carro.length - 1);
      }
      const mi_Total = sumar_Total_Carro(array_del_carro).toFixed(2);

      const poner_Total = document.getElementById("pongo_Total");
      poner_Total.textContent = mi_Total;
    } // termina el if de control de inputCantidad.value
    else {
      inputCantidad.value = 0;
    }
  });
}
