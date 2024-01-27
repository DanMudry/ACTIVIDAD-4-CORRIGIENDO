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
    celdaTitle.classList.add("celda_Titulo");
    nuevaFila.append(celdaTitle);

    const celdaSKU = document.createElement("p");
    celdaSKU.textContent = articulo.SKU;
    celdaSKU.classList.add("celda_Sku");
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
    celdaPrice.classList.add("celda_Precio");
    celdaPrice.textContent = articulo.price + moneda;
    nuevaFila.append(celdaPrice);

    const celdaTotal = document.createElement("td");
    celdaTotal.id = articulo.SKU;
    celdaTotal.classList.add("celda_Total");
    celdaTotal.textContent = 0 + moneda;
    nuevaFila.append(celdaTotal);

    miDiv.append(nuevaFila);
  }); //aca termina el forEach para crear la tabla
}
