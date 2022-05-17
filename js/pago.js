

function obtener_valor (){
    totalaPagar = parseInt(localStorage.getItem( "totalPagar" ));
    //document.write("EL TOTAL DE TU COMPRA ES: $" + totalaPagar);
    console.log ("total: $" + totalaPagar)
}

obtener_valor();

let totalDom = 
`<p class="text-center"><strong>
EL TOTAL DE TU COMPRA ES:$${totalaPagar}.
</strong> 
</p>`;

  let pTotal = document.createElement("p");
  pTotal.innerHTML = "<table>"+totalDom+"<table>";
  document.body.append(pTotal);



//ABONAR CON DEBITO
function pagaDebito(e){
    Swal.fire({
        html: '<h1>GRACIAS POR TU COMPRA</h1> <br> <p>Seleccionaste pagar con Tarjeta de Debito </p>',
        icon: 'success',
        confirmButtonText: '<a href="../resumen.html">VER RESUMEN DE COMPRA</a>',
      confirmButtonColor: 'rgb(33, 189, 163)',
      background: 'rgb(34, 34, 78)',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      console.log("Efectivo/Debito :$" + totalaPagar);
      const pago = "Efectivo/Debito :$" + totalaPagar;

      const guardarPago = JSON.stringify(pago);
      localStorage.setItem("pago", guardarPago);
      

}

let btnDebito = document.getElementById("btnDebito");
btnDebito.addEventListener("click", pagaDebito);

//ABONAR EN 3 CUOTAS
function paga3cuotas(e){
    const totalEn3 = totalaPagar / 3;

    Swal.fire({
      html: '<h1>GRACIAS POR TU COMPRA</h1> <br> <p>Seleccionaste pagar en 3 cuotas sin interes </p>',
      icon: 'success',
      confirmButtonText: '<a href="../resumen.html">VER RESUMEN DE COMPRA</a>',
    confirmButtonColor: 'rgb(33, 189, 163)',
    background: 'rgb(34, 34, 78)',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    console.log("3 cuotas de:$ " + totalEn3)
    const pago = "3 cuotas de:$ " + totalEn3;

    const guardarPago = JSON.stringify(pago);
    localStorage.setItem("pago", guardarPago);

}

let btn3cuotas = document.getElementById("btn-3-cuotas");
btn3cuotas.addEventListener("click", paga3cuotas);

//ABONAR EN 6 CUOTAS
function paga6cuotas(e){
  const totalEn6 = (totalaPagar * 1.25) / 6;

  Swal.fire({
    html: '<h1>GRACIAS POR TU COMPRA</h1> <br> <p>Seleccionaste pagar en 6 cuotas </p>',
    icon: 'success',
    confirmButtonText: '<a href="../resumen.html">VER RESUMEN DE COMPRA</a>',
  confirmButtonColor: 'rgb(33, 189, 163)',
  background: 'rgb(34, 34, 78)',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
  
  console.log("6 cuotas de:$ " + totalEn6)
    const pago = "6 cuotas de:$ " + totalEn6;

    const guardarPago = JSON.stringify(pago);
    localStorage.setItem("pago", guardarPago);
}

let btn6cuotas = document.getElementById("btn-6-cuotas");
btn6cuotas.addEventListener("click", paga6cuotas);



//ABONAR EN 12 CUOTAS
function paga12cuotas(e){
  const totalEn12 = (totalaPagar * 1.42) / 12
  Swal.fire({
    html: '<h1>GRACIAS POR TU COMPRA</h1> <br> <p>Seleccionaste pagar en 12 cuotas </p>',
    icon: 'success',
    confirmButtonText: '<a href="../resumen.html">VER RESUMEN DE COMPRA</a>',
  confirmButtonColor: 'rgb(33, 189, 163)',
  background: 'rgb(34, 34, 78)',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
    console.log ("12 cuotas de: " + totalEn12);
    const pago = "12 cuotas de:$ " + totalEn12;

    const guardarPago = JSON.stringify(pago);
    localStorage.setItem("pago", guardarPago);
}

let btn12cuotas = document.getElementById("btn-12-cuotas");
btn12cuotas.addEventListener("click", paga12cuotas);

//ABONAR EN 24 CUOTAS
function paga24cuotas(e){
  const totalEn24 = (totalaPagar * 1.75) / 24
  Swal.fire({
    html: '<h1>GRACIAS POR TU COMPRA</h1> <br> <p>Seleccionaste pagar en 24 cuotas </p>',
    icon: 'success',
    confirmButtonText: '<a href="../resumen.html">VER RESUMEN DE COMPRA</a>',
  confirmButtonColor: 'rgb(33, 189, 163)',
  background: 'rgb(34, 34, 78)',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
  console.log ("24 cuotas de: " + totalEn24);
  const pago = "24 cuotas de:$ " + totalEn24;

  const guardarPago = JSON.stringify(pago);
  localStorage.setItem("pago", guardarPago);
}

let btn24cuotas = document.getElementById("btn-24-cuotas");
btn24cuotas.addEventListener("click", paga24cuotas);










