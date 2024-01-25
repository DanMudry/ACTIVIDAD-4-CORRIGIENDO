class Producto {
  constructor(sku, cantidad, precio, total) {
    this.sku = sku;
    this.cantidad = cantidad;
    this.precio = precio;
    this.total = (this.cantidad * this.precio).toFixed(2);
  }
}

function agregarAlCarro(sku, cant, precio) {
  array_del_carro.push(new Producto(sku, cant, precio));
}

function modificarCarro(indice, modifica_cantidad) {
  console.log("estoy en modificaCarro " + array_del_carro.length);
  array_del_carro[indice].cantidad = modifica_cantidad;
  array_del_carro[indice].total = (
    modifica_cantidad * array_del_carro[indice].precio
  ).toFixed(2);
  /*array_del_carro.forEach((prod) => {
    console.log(prod);
  });*/

  if (array_del_carro[indice].total == 0.0) {
    remueve_Nodo_Carro(indice);
    array_del_carro.splice(indice, 1);
  } else {
    modifica_Tabla_Carro(indice);
  }
}

function encuentra_Articulo(sku) {
  return libreriaArticulos.find(
    (articuloBuscado) => articuloBuscado.SKU === sku
  );
}

function sumar_Total_Carro(sumando_Carro) {
  return sumando_Carro.reduce((acumulador, sumando_Carro) => {
    return acumulador + parseFloat(sumando_Carro.total);
  }, 0);
}
//modificando
