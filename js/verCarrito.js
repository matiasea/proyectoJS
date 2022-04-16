const productosSeleccionados = JSON.parse(localStorage.getItem("compra"));

console.log(productosSeleccionados)
//document.write(productosSeleccionados)

for ( i = 0; i < productosSeleccionados.lenght; i++){
    document.write(productosSeleccionados[i].articulo);
    document.write(productosSeleccionados[i].marca);
    document.write(productosSeleccionados[i].precio);
    }