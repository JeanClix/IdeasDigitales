export const misConstantes = {
  apiWebURL: "https://servicios.campus.pe/"
}

export const misMetodos = {
  agregarCarrito: function (productoSeleccionado: any, cantidad: number) {
    let itemCarrito: any = {
      idproducto: productoSeleccionado.idproducto,
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.preciorebajado == 0
        ? productoSeleccionado.precio
        : productoSeleccionado.preciorebajado,
      cantidad: cantidad,
    }
    console.log(itemCarrito)
    let carrito: any[] = []

    if (sessionStorage.getItem("carritocompras") !== null) {
      let carritoStorage = sessionStorage.getItem("carritocompras") as string
      carrito = JSON.parse(carritoStorage)

      let index = -1;
      for (let i = 0; i < carrito.length; i++) {
        if (itemCarrito.idproducto === carrito[i].idproducto) {
          index = i
          break
        }
      }
      if (index !== -1) {
        carrito[index].cantidad += cantidad
        sessionStorage.setItem("carritocompras", JSON.stringify(carrito))
      } else {
        carrito.push(itemCarrito)
        sessionStorage.setItem("carritocompras", JSON.stringify(carrito))
      }
    } else {
      carrito.push(itemCarrito)
      sessionStorage.setItem("carritocompras", JSON.stringify(carrito))
    }

  }
}
