
//.------------RECUPERAR DATOS DE LOS PRODUCTOS EN LOCAL STORAGE------------
const productosResumen = JSON.parse(localStorage.getItem("carrito"));


console.log(productosResumen)

let cardGroup2 = document.getElementsByClassName("table1");
productosCarritoResumen();

function productosCarritoResumen(){
    for (let i = 0; i < productosResumen.length; i++) {
    const element = productosResumen[i];
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

// ----------------- RECUPERAR DATOS DE LA ENTREGA ---------------------
const entregaResumen = JSON.parse(localStorage.getItem("direccionEntrega"))
console.log (entregaResumen)

let direccionDom = document.getElementsByClassName("div1");

function direccionResumen(){
for (let i = 0; i < entregaResumen.length; i++) {
    const element = entregaResumen[i];
    const {calle, numero, localidad, provincia, telefono, comentarios} = element;
    domE = `<div>
          <tr>
          <p>DIRECCION: ${calle} + ${numero} </p>
            <p> LOCALIDAD: ${localidad} </p>
            <p> PROVINCIA: ${provincia} </p>
            <p> TELEFONO: ${telefono} </p>
            <p> COMENTARIOS: ${comentarios} </p>
    </div>`  
    direccionDom.appendChild (domE);
    

}
}
direccionResumen();

 //----------------RECUPERAR DATOS DEL PAGO-----------------------

 const pagoResumen = JSON.parse(localStorage.getItem("pago"))
console.log(pagoResumen)

let datosPagoResumen = `<div>
<p>DATOS DEL PAGO: ${pagoResumen}</p>
</div>`

  ;

  let divPagoResumen= document.createElement("div");
  
  divPagoResumen.innerHTML = "<div>"+datosPagoResumen+"</div>";

  document.body.append(divPagoResumen);


