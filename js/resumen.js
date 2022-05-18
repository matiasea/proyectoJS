
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


//----------------------------------------------------------------------
// ----------------- RECUPERAR DATOS DE LA ENTREGA ---------------------
const entregaResumen = JSON.parse(localStorage.getItem("direccionEntrega"));
console.log (entregaResumen);

function direccionResumen(){
  let entregaDomicilio = Object.entries(entregaResumen);
console.log(entregaDomicilio);

let datosEntregaResumen = `<div class = "div-resumen sombra1"> ${entregaDomicilio[0]} <br><br>
                                ${entregaDomicilio[1]} <br><br>
                                ${entregaDomicilio[2]} <br><br>
                                ${entregaDomicilio[3]} <br><br>
                                ${entregaDomicilio[4]} <br><br>
                                ${entregaDomicilio[5]} <br><br>
                                ${entregaDomicilio[6]} </div>`

  ;

  let divEntregaResumen= document.createElement("div");
  divEntregaResumen.innerHTML = "<div>"+datosEntregaResumen+"</div>";
  document.body.append(divEntregaResumen);
  }
 
direccionResumen();


//---------------------------------------------------------------
 //----------------RECUPERAR DATOS DEL PAGO-----------------------

 const pagoResumen = JSON.parse(localStorage.getItem("pago"))
console.log(pagoResumen)

let datosPagoResumen = `<div class = "div-resumen sombra1">
<p>DATOS DEL PAGO: ${pagoResumen}</p>
</div>`

  ;

  let divPagoResumen= document.createElement("div");
  
  divPagoResumen.innerHTML = "<div>"+datosPagoResumen+"</div>";

  document.body.append(divPagoResumen);


