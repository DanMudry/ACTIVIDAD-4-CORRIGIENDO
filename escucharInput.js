function escucharInput() {
  return new Promise((resolve) => {
    const escucha = document.getElementById("cuerpoTabla");
    escucha.classList.add("miInputEstilizado");
    const mi_Total = sumar_Total_Carro(array_del_carro).toFixed(2);
    const poner_Total = document.getElementById("pongo_Total");
    poner_Total.textContent = mi_Total + moneda;

    escucha.addEventListener("input", (event) => {
      const targetEs = event.target;
      targetEs.classList.add("miInputEstilizado");

      const dataIde = targetEs.dataset.id;
      //en dataIde guardo el target del evento, que es el SKU del articulo en donde se produjo el evento

      //const queHago = targetEs.id;

      const inputCantidad = document.querySelector(
        '[data-id="' + dataIde + '"]'
      );
      const celdaCantidad = document.querySelector(
        '[data-id="' + dataIde + '-cantidad"]'
      );
      const celdaSubTotal = document.querySelector(
        '[data-id="' + dataIde + '"]'
      );

      if (inputCantidad.value >= 0) {
        const modificaPrecio = document.getElementById(dataIde);
        //tengo todo con data-id=SKU del evento para agarrarme, menos la celda en donde se va modificando el precio en la tabla 1
        //en esa celda el id es el SKU, entonces me puedo agarrar, es el unico elemento que tiene como id el SKU del evento
        const precioArticulo = libreriaArticulos.find(
          (articuloBuscado) => articuloBuscado.SKU === dataIde
        ); //busco en libreriaArticulos el producto donde se produjo el evento asi me traigo el precio

        modificaPrecio.textContent =
          (inputCantidad.value * precioArticulo.price).toFixed(2) + moneda; //modifico el DOM en la tabla 1

        /*const indice_del_articulo = array_del_carro.findIndex(
        (producto) => producto.sku === dataIde
      ); <== quise hacerlo asi pero no

      !!!FELIX!!! no se por que esto me daba un (-1) siendo que el articulo estaba, entonces
      se me iba a la funcion agregarAlCarro, siendo que no tenia que ir, de esa manera me pintaba
      un nodo nuevo que no correspondia y bueno.... recurri a mi buen amigo de toda la vida el For comun y silvestre, he tirado
      unas cuantas horas con esto. Sorry please.... por lo menos no te puse ningun await!!! */
        indice_del_articulo = -1;
        for (let i = 0; i < array_del_carro.length; i++) {
          if (array_del_carro[i].sku === dataIde) {
            indice_del_articulo = i;
            i = array_del_carro.length;
          }
        } //me traigo el indice de donde esta el articulo en el [array_del_carro] en este array voy guardando lo que va seleccionando

        if (indice_del_articulo !== -1) {
          modificarCarro(indice_del_articulo, inputCantidad.value, dataIde); //el articulo esta en [array_del_carro]
        } else {
          agregarAlCarro(dataIde, inputCantidad.value, precioArticulo.price); //el articulo no esta en [array_del_carro]
          armar_Tabla_Carro(array_del_carro.length - 1);
          //como el articulo no estaba entonces en "agregar..." hago push a un nuevo objeto,
          //de esa manera ya se que esta en la ultima posicion de [array_del_carro], envio el indice length-1
        }
      } // termina el if de control de inputCantidad.value
      else {
        inputCantidad.value = 0; // si se hizo click en la flecha para abajo y la cantidad estaba en 0, repinto la celda para que no salga el -1
      }
      calcula_total(array_del_carro); //esta funcion calcula el total de la compra y modifica el DOM
    }); //aca termina el evento
    resolve();
  });
}
