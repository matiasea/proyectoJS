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

  
    


    let btnentrega = document.getElementById("btn-entrega");
    btnentrega.addEventListener("click", () => {
            nuevaDireccion();
        
    })


    
