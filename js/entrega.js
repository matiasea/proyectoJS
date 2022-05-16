class Direccion{
    constructor(calle,numero,localidad,cp,provincia,telefono,comentario){
        this.calle = calle;
        this.numero = numero;
        this.localidad = localidad;
        this.cp = cp;
        this.provincia = provincia;
        this.telefono = telefono;
        this.comentario = comentario;
    }
}



    function nuevaDireccion (){
        let calle = document.getElementById("calle");
        let numero = document.getElementById("numero");
        let localidad = document.getElementById("localidad");
        let cp = document.getElementById("cp");
        let provincia = document.getElementById("provincia");
        let telefono = document.getElementById("telefono");
        let comentario = document.getElementById("comentario");

        let direccion1 = new Direccion(calle,numero,localidad,cp,provincia,telefono,comentario);
        
        console.log(direccion1);
        
        const guardarDireccion = JSON.stringify(direccion1);
        localStorage.setItem("direccionEntrega", guardarDireccion);
        

    
    }

  
    let datosDeEnvio = `<div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Nombre y Apellido" aria-label="Username" aria-describedby="basic-addon1">
  </div>
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Calle" aria-label="Username" id="calle">
    <input type="text" class="form-control" placeholder="Numero" aria-label="Server" id="numero" >
    <input type="text" class="form-control" placeholder="Localidad" aria-label="Server" id="localidad">
  </div>  <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Codigo Postal" aria-label="Username" id= "cp">
  <input type="text" class="form-control" placeholder="Provincia" aria-label="Username" id= "provincia">
  <input type="text" class="form-control" placeholder="Telefono" aria-label="Server" id= "telefono"> 
</div> 
  <div class="input-group">
    <span class="input-group-text">Comentarios</span>
    <textarea class="form-control" aria-label="With textarea" id= "comentario"></textarea>
  </div>


  <button type="submit" id="btn-entrega">Listo!</button>`
  ;

  let divEntrega = document.createElement("div");
  
  divEntrega.innerHTML = "<div>"+datosDeEnvio+"</div>";

  document.body.append(divEntrega);


  let btnentrega = document.getElementById("btn-entrega");
    btnentrega.addEventListener("click", () => {
        if (validar_formulario()){
          nuevaDireccion();
        
        }else{
          alert("Ingrese toda la información necesaria");
        }   
    });
    
    
//VALIDAR FORMULARIO
    function validar_formulario(){
        let calle = document.getElementById("calle").value;
        let numero = document.getElementById("numero").value;
        let localidad = document.getElementById("localidad").value;
        let cp = document.getElementById("cp").value;
        let provincia = document.getElementById("provincia").value;
        let telefono = document.getElementById("telefono").value;

        if (!calle ){
          alert("Ingrese la calle");
          return false;
        }
        if (!numero ){
        alert("Ingrese el numero");
        return false;
        }
        if (!localidad ){
        alert("Ingrese su localidad");
        return false;
        }
        if (!cp ){
        alert("Ingrese el codigo postal de su ciudad");
        return false;
        }
        if (!provincia ){
        alert("Ingrese la provincia");
        return false;
        }
        if (!telefono ){
        alert("Ingrese un telefono de contacto");
        return false;
        }
        
        Swal.fire({
        html: '<p>Direccion cargada!</p>',
        icon: 'success',
        confirmButtonText: '<a href="./pago.html">IR A PAGAR</a>',
        confirmButtonColor: 'rgb(33, 189, 163)',
        background: 'rgb(34, 34, 78)',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
        }
        })
        return true; 
      }
