

function obtener_valor (){
    totalaPagar = localStorage.getItem( "Total" );
    document.write("EL TOTAL DE TU COMPRA ES: $" + totalaPagar);
    console.log ("total: $" + totalaPagar)
}

obtener_valor();



//ABONAR CON DEBITO
function pagaDebito(e){
    alert("$" + totalaPagar + " se debitará de la Tarjeta seleccionada.")
}

let btnDebito = document.getElementById("btnDebito");
btnDebito.addEventListener("click", pagaDebito);

//ABONAR EN 3 CUOTAS
function paga3cuotas(e){
    alert ("Seleccionaste pagar en 3 cuotas de: " + totalaPagar / 3 + " Gracias por tu compra. ")
}

let btn3cuotas = document.getElementById("btn-3-cuotas");
btn3cuotas.addEventListener("click", paga3cuotas);

//ABONAR EN 6 CUOTAS
function paga6cuotas(e){
    totalaPagar = totalaPagar + totalaPagar * 15% 
    alert ("Seleccionaste pagar en 6 cuotas de: " + totalaPagar / 6 + " Gracias por tu compra. ")
}

let btn6cuotas = document.getElementById("btn-6-cuotas");
btn6cuotas.addEventListener("click", paga6cuotas);

//ABONAR EN 12 CUOTAS
function paga12cuotas(e){
    totalaPagar = totalaPagar + totalaPagar * 40%
    alert ("Seleccionaste pagar en 12 cuotas de: " + parseFloat(totalaPagar / 12) + " Gracias por tu compra. ")
}

let btn12cuotas = document.getElementById("btn-12-cuotas");
btn12cuotas.addEventListener("click", paga12cuotas);

//ABONAR EN 24 CUOTAS
function paga24cuotas(e){
    totalaPagar = totalaPagar + totalaPagar * 70%
    alert ("Seleccionaste pagar en 24 cuotas de: " + parseFloat(totalaPagar / 24) + " Gracias por tu compra. ")
}

let btn24cuotas = document.getElementById("btn-24-cuotas");
btn24cuotas.addEventListener("click", paga24cuotas);










