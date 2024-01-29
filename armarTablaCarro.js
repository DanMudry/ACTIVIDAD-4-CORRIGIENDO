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
  maldito_total(array_del_carro);
}

function remueve_Nodo_Carro(indice) {
  const fila_Borrar = document.getElementById("cuerpo_Tabla_Carro");
  const nodo_Borrar = document.getElementById(
    array_del_carro[indice].sku + "fila"
  );
  fila_Borrar.removeChild(nodo_Borrar);
  array_del_carro.splice(indice, 1);
  maldito_total(
    array_del_carro
  ); /*Felix, no sabes lo que me llevo encontrar el lugar donde poner esto
  el problema que tenia es que cuando un articulo pasaba de 1 a 0, me quedaba la suma del carro atrasada
  en ese articulo que paso de 1 a 0 -- Perdon por el nombre, de la funcion, pero realmente !Maldito Total!!
  Me di cuenta por que la situacion era cuando el articulo pasaba de 1 a 0, en ese caso el nodo hay que removerlo*/
}

function maldito_total(mi_maldito_array) {
  mi_Total = sumar_Total_Carro(array_del_carro).toFixed(2);
  const poner_Total = document.getElementById("pongo_Total");
  poner_Total.textContent = mi_Total + moneda;
}
