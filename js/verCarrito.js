const productosSeleccionados = JSON.parse(localStorage.getItem("carrito")) || [];

console.log(productosSeleccionados)
//document.write(productosSeleccionados)

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
    </tbody>`  
    cardGroup2[0].innerHTML += dom;

}

for (let i = 0; i < productosSeleccionados.length; i++) {
    const element = productosSeleccionados[i].precio;
    console.log(element)   
}

const total = productosSeleccionados.reduce((acc, prod) => acc + prod.precio, 0);
    console.log(total)

localStorage.setItem("totalPagar", total);


let totalCompra = 
`<thead>
<tr>
  <th scope="col"> </th>
  <th scope="col"> </th>
  <th scope="col">TOTAL</th>
  <th scope="col">${total} </th>
</tr>
</thead>`;

  let divTotal = document.createElement("table");
  divTotal.innerHTML = "<table>"+totalCompra+"<table>";
  document.body.append(divTotal);
