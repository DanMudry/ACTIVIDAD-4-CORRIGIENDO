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
    console.log("data id del Input -->" + inputCantidad.dataset.id);
    console.log("estoy afuera de todo -->" + inputCantidad.value);
    const modificaPrecio = document.getElementById(dataIde);
    const precioArticulo = libreriaArticulos.find(
      (articuloBuscado) => articuloBuscado.SKU === dataIde
    );

    modificaPrecio.textContent =
      (inputCantidad.value * precioArticulo.price).toFixed(2) + moneda;

    const indice_del_articulo = array_del_carro.findIndex(
      (producto) => producto.sku === dataIde
    );
    console.log("este es el indice ==> " + indice_del_articulo);

    if (indice_del_articulo !== -1) {
      modificarCarro(indice_del_articulo, inputCantidad.value);
      console.log(
        "estoy al principio del input #### " + array_del_carro.length
      );

      //armo_Total_Carro();
    } else {
      console.log("el precio antes de el carro " + precioArticulo.price);
      carro_activado = true;
      agregarAlCarro(dataIde, inputCantidad.value, precioArticulo.price);
      armar_Tabla_Carro(array_del_carro.length - 1);
      //armo_Total_Carro();
    }
    const mi_Total = sumar_Total_Carro(array_del_carro).toFixed(2);
    console.log("total de tu compra *******----" + mi_Total);
    const poner_Total = document.getElementById("pongo_Total");
    poner_Total.textContent = mi_Total;
  });
} //aca termina el listenner del Input}
//modificando
