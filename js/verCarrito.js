//-------------------------------------------------------------------
//--------------- TRAEMOS LOS PRODUCOTS DEL LS--------------------------

const productosSeleccionados = JSON.parse(localStorage.getItem("carrito")) || [];
productosSeleccionados.length === 0 && alert("El Carrito está vacío") 


//------------------------------------------------------------------
//----- CREAMOS UNA TABLA CON EL RESUMEN DE LOS PRODUCTOS SELECCIONADOS--------------
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
    </tbody>`  
    cardGroup2[0].innerHTML += dom;
    
}
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



