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
        console.log(direccion1)
        
    
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
  <button type="submit" id="btn-entrega"><a href="../secciones/pago.html">listo!</a></button>
  `;

  let divEntrega = document.createElement("div");
  
  divEntrega.innerHTML = "<div>"+datosDeEnvio+"</div>";

  document.body.append(divEntrega);


  let btnentrega = document.getElementById("btn-entrega");
    btnentrega.addEventListener("click", () => {
            nuevaDireccion();
        
    });
    
