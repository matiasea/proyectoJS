//const productosSeleccionados = JSON.parse(localStorage.getItem("carrito")) || [];

//console.log(productosSeleccionados)

const productosSeleccionados = JSON.parse(localStorage.getItem("carrito")) || [];
productosSeleccionados.length === 0 && alert("El Carrito está vacío") 
let cardGroup2 = document.getElementsByClassName("table")
productosCarrito();



function productosCarrito(){
    for (let i = 0; i < productosSeleccionados.length; i++) {
    const element = productosSeleccionados[i];
    const {articulo, marca, precio, img} = element;
    const dom = `<tbody>
          <tr>
            <th scope="row"><img src="${img} " alt="" width="80px"</th>
            <td>${articulo} </td>
            <td>${marca}</td>
            <td>$${precio} </td>
            <td> <button class="btn btn-outline-secondary" id="botonEliminar"><img src="./img/LUPA.png" width = "20px" alt=""></button></td>
    </tbody>`  
    cardGroup2[0].innerHTML += dom;
    
}
}

// -------------ELIMINAR DEL CARRITO --------------

    
const eliminarDelCarrito1 = (prodId) => {
    const productoEncontrado = productosSeleccionados.find(prod  => prod.id === prodId);
    const indice = productosSeleccionados.indexOf(productoEncontrado);
    productosSeleccionados.splice(indice, 1);
    actualizarCarrito();
    console.log(productosSeleccionados)
    

    /* let btnEliminar = document.getElementById("botonEliminar");
    btnEliminar.onclick = () => {
    eliminarDelCarrito1()
     */
    
    }

const botonEliminar = document.getElementById("botonEliminar");
 for (let i = 0; i < botonEliminar.length; i++) {
    const element = botonEliminar[i]; 
    botonEliminar.addEventListener("click", eliminarDelCarrito1)
}
   

console.log(productosSeleccionados)
console.log(carrito)



//-------------------------------------------------------------------
//--------------------------ACTUALIZAR CARRITO --------------------

const actualizarCarrito= () => {
    productosSeleccionados = {};
    productosCarrito()
}




//---------------------------------------------------
//--------------------CALCULAR TOTAL-----------------

for (let i = 0; i < productosSeleccionados.length; i++) {
    const element = productosSeleccionados[i].precio;
    console.log(element)   
}

const total = productosSeleccionados.reduce((acc, prod) => acc + prod.precio, 0);
    console.log(total)

localStorage.setItem("totalPagar", total);

const tablaTotal = document.getElementsByClassName("table-2");
    let totalCompra = 
    `<thead>
    <tr>
      <th scope="col"> </th>
      <th scope="col"> </th>
      <th scope="col">TOTAL</th>
      <th scope="col">$${total} </th>
    </tr>
    </thead>`;
    tablaTotal[0].innerHTML += totalCompra;


//actualizarCarrito();
