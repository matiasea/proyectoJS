
//--------------------------------------------------------
//----------CONSTRUCTOR DIRECCION DE ENTREGA-----------------

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


//----------------------------------------------------
//-----------------VALIDAR FORMULARIO----------------------
function validar_formulario(){
  const calleValue = document.getElementById("calle").value;
  const numeroValue = document.getElementById("numero").value;
  const localidadValue = document.getElementById("localidad").value;
  const cpValue = document.getElementById("cp").value;
  const provinciaValue = document.getElementById("provincia").value;
  const telefonoValue = document.getElementById("telefono").value;

  if (!calleValue ){
    Swal.fire({
      title: "Ingrese la calle",
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
    return false;
  }
  if (!numeroValue ){
    Swal.fire({
      title: "Ingrese el número",
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  return false;
  }
  if (!localidadValue ){
    Swal.fire({
      title: "Ingrese su localidad/ciudad",
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  return false;
  }
  if (!cpValue ){
    Swal.fire({
      title: "Ingrese el codigo postal de su ciudad",
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  return false;
  }
  if (!provinciaValue ){Swal.fire({
    title: "Ingrese su provincia",
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  });
  return false;
  }
  if (!telefonoValue )
  {Swal.fire({
    title: "Ingrese un numero de contacto",
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  });
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

//------------------------------------------------------
//------------------ CREAMOS LA NUEVA DIRECCION -------------

    function nuevaDireccion (){
        const calle = document.getElementById("calle").value.toUpperCase();
        const numero = document.getElementById("numero").value.toUpperCase();
        const localidad = document.getElementById("localidad").value.toUpperCase();
        const cp = document.getElementById("cp").value.toUpperCase();
        const provincia = document.getElementById("provincia").value.toUpperCase();
        const telefono = document.getElementById("telefono").value.toUpperCase();
        const comentario = document.getElementById("comentario").value.toUpperCase();

        let direccion1 = new Direccion(calle,numero,localidad,cp,provincia,telefono,comentario);
        
        console.log(direccion1);
        //GUARDAMOS EN LS
        const guardarDireccion = JSON.stringify(direccion1);
        localStorage.setItem("direccionEntrega", guardarDireccion);
         
    }

  
//------------------------------------------
//------------ CREAMOS FORMULARIO PARA INGRESO DE DATOS DOM ------------------

    let datosDeEnvio = `<div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Nombre y Apellido" aria-label="Username" aria-describedby="basic-addon1 id="nombre"">
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



  //------------------- EVENTO CREAR DIRECCION DE ENTREGA-----------
  
  let btnentrega = document.getElementById("btn-entrega");
    btnentrega.addEventListener("click", () => {
        if (validar_formulario()){
          nuevaDireccion();
        
        }else{
          //alert("Ingrese toda la información necesaria");
        }   
    });
    
    



      