function armar_Tabla_Carro(indice_Agregar) {
  const inicio_Carro = document.getElementById("cuerpo_Tabla_Carro");

  const fila_Carro = document.createElement("tr");
  fila_Carro.setAttribute("id", array_del_carro[indice_Agregar].sku + "fila");
  inicio_Carro.append(fila_Carro);

  const title_Carro = document.createElement("td");

  const art_Carro = encuentra_Articulo(array_del_carro[indice_Agregar].sku);

  title_Carro.textContent = art_Carro.title;
  title_Carro.setAttribute("id", array_del_carro[indice_Agregar].sku + "title");

  fila_Carro.append(title_Carro);

  const total_Linea_Carro = document.createElement("td");

  total_Linea_Carro.setAttribute(
    "id",
    array_del_carro[indice_Agregar].sku + "total"
  );
  total_Linea_Carro.textContent =
    array_del_carro[indice_Agregar].total + moneda;

  fila_Carro.append(total_Linea_Carro);

  inicio_Carro.append(fila_Carro);
}

function modifica_Tabla_Carro(indice) {
  const art_Modificar = document.getElementById(
    array_del_carro[indice].sku + "total"
  );
  art_Modificar.textContent = array_del_carro[indice].total + moneda;
  calcula_total(array_del_carro);
}

function remueve_Nodo_Carro(indice) {
  const fila_Borrar = document.getElementById("cuerpo_Tabla_Carro");
  const nodo_Borrar = document.getElementById(
    array_del_carro[indice].sku + "fila"
  );
  fila_Borrar.removeChild(nodo_Borrar);
  array_del_carro.splice(indice, 1);
  calcula_total(array_del_carro);
}

function calcula_total(mi_maldito_array) {
  mi_Total = sumar_Total_Carro(array_del_carro).toFixed(2);
  const poner_Total = document.getElementById("pongo_Total");
  poner_Total.textContent = mi_Total + moneda;
}

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
