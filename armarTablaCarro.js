function armar_Tabla_Carro(indice_Agregar) {
  const inicio_Carro = document.getElementById("cuerpo_Tabla_Carro");

  // Crear un nuevo elemento <tr> una fila
  const fila_Carro = document.createElement("tr");
  fila_Carro.setAttribute("id", array_del_carro[indice_Agregar].sku + "fila");
  inicio_Carro.append(fila_Carro);
  // Crear y agregar celdas a la fila
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
}

function remueve_Nodo_Carro(indice) {
  var fila_Borrar = document.getElementById("cuerpo_Tabla_Carro");
  var nodo_Borrar = document.getElementById(
    array_del_carro[indice].sku + "fila"
  );
  fila_Borrar.removeChild(nodo_Borrar);
  array_del_carro.splice(indice, 1);
}
//modificando
