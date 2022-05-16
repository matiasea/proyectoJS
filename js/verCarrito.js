//const productosSeleccionados = JSON.parse(localStorage.getItem("carrito")) || [];

//console.log(productosSeleccionados)

const productosSeleccionados = JSON.parse(localStorage.getItem("carrito")) || [];
productosSeleccionados.length === 0 && alert("El Carrito está vacío") 


    for (let i = 0; i < productosSeleccionados.length; i++) {
    const element = productosSeleccionados[i];
    const {articulo, marca, precio, img} = element;
    const cardGroup2 = document.getElementsByClassName("table")
    const dom = `<tbody>
          <tr>
            <th scope="row"><img src="${img} " alt="" width="80px"</th>
            <td>${articulo} </td>
            <td>${marca}</td>
            <td>$${precio} </td>
            <td> <button class="btn btn-outline-secondary botonEliminar" id="botonEliminar"><img src="./img/LUPA.png" width = "20px" alt=""></button></td>
    </tbody>`  
    cardGroup2[0].innerHTML += dom;
    
}


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
//--------------------------ACTUALIZAR CARRITO --------------------

const actualizarCarritos= () => {
    cardGroup2[0].innerHTML = "";
    
    for (let i = 0; i < productosSeleccionados.length; i++) {
    const element = productosSeleccionados[i];
    const {articulo, marca, precio, img} = element;
    const cardGroup2 = document.getElementsByClassName("table")
    const dom = `<tbody>
          <tr>
            <th scope="row"><img src="${img} " alt="" width="80px"</th>
            <td>${articulo} </td>
            <td>${marca}</td>
            <td>$${precio} </td>
            <td> <button class="btn btn-outline-secondary botonEliminar" id="botonEliminar"><img src="./img/LUPA.png" width = "20px" alt=""></button></td>
    </tbody>
    
    `  
    cardGroup2[0].innerHTML += dom;
}
}