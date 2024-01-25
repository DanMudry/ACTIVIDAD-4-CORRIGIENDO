function crearTabla(arrayDeArticulos) {
  // Obtener el div donde se agregarán los párrafos
  const miDiv = document.getElementById("cuerpoTabla");
  // Recorrer el array de artículos
  arrayDeArticulos.forEach((articulo) => {
    // Crear un nuevo elemento <tr> una fila
    const nuevaFila = document.createElement("tr");
    miDiv.append(nuevaFila);
    // Crear y agregar celdas a la fila
    const celdaTitle = document.createElement("td");
    celdaTitle.textContent = articulo.title;
    nuevaFila.append(celdaTitle);

    const celdaSKU = document.createElement("p");
    celdaSKU.textContent = articulo.SKU;
    celdaTitle.append(celdaSKU);
    debugger;
    const celdaInput = document.createElement("td");

    const btnIngresa = document.createElement("input");
    btnIngresa.type = "number";
    btnIngresa.id = "ingresa";
    btnIngresa.setAttribute("data-id", articulo.SKU);
    btnIngresa.value = "0";

    celdaInput.append(btnIngresa);

    nuevaFila.append(celdaInput);

    const celdaPrice = document.createElement("td");

    celdaPrice.setAttribute("data-id", articulo.SKU);
    celdaPrice.textContent = articulo.price + moneda;
    nuevaFila.append(celdaPrice);

    const celdaTotal = document.createElement("td");
    celdaTotal.id = articulo.SKU;
    celdaTotal.textContent = 0 + moneda;
    nuevaFila.append(celdaTotal);

    miDiv.append(nuevaFila);
  }); //aca termina el forEach para crear la tabla
}

function escucharInput() {
  const escucha = document.getElementById("cuerpoTabla");
  escucha.addEventListener("input", (event) => {
    const targetEs = event.target;

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
  });
} //aca termina el listenner del Input}
//modificando
