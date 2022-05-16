/* //INGRESO DE USUARIO REGISTRADO
 let usuario = prompt ("Ingresa tu usuario")
let contra = prompt ("Ingresa tu contraseña")
let usuario1 = "Matias"
let contra1 = 1234


while ((usuario != usuario1) || (contra != contra1)) {
    alert ("Ingreso Incorrecto, vuelve a intentarlo")
    usuario = prompt ("Ingresa tu usuario")
    contra = prompt ("Ingresa tu contraseña")
    
}
 */
//alert ("Bienvenido " + usuario) 

// ---------- TRAER PRODUCTOS DEL JSON ---------------

const productos = [];

const traerProductos = async () => {
    const resp = await
    fetch('./local.json')
    const data = await resp.json()
    productos.push(...data)
    console.log(data)
    productosDom()
}

traerProductos();


// ---------- CREAR LISTA DE PRODUCTOS ------------------


function productosDom(){
    for (let i = 0; i < productos.length; i++) {
    const element = productos[i];
    const {id, articulo, marca, precio, img, descripcion1, descripcion2} = element;
    const cardGroup = document.getElementsByClassName("card")
    const dom = 
    `<div class="row g-0" id="${id}"> 
    <div class="col-md-4" >
  <img src=${img} class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${articulo + " " + marca}</h5>
    <p class="card-text">${descripcion1} <br> ${descripcion2} <br> PRECIO: $ ${precio.toLocaleString()}</p>
    <button class="btn-agregar">Agregar al Carrito</button><br>
    </div>
    </div>
</div>`
    cardGroup[0].innerHTML += dom;
    //console.log(cardGroup);
}
const botonAgregar = document.getElementsByClassName("btn-agregar");

for (let i = 0; i < botonAgregar.length; i++) {
    const element = botonAgregar[i];
    element.addEventListener("click", agregarAlCarrito)
}

}





// ---------------- AGREGAR PRODUCTOS AL CARRITO ---------------


const carrito = []
function agregarAlCarrito(e){
    const prod = (e.target).parentNode.parentNode.parentNode;
    const id = prod.getAttribute("id");
    const productoEncontrado = productos.find((item) => item.id == id);
    carrito.push(productoEncontrado);
    console.log(carrito);
    const guardarCarrito = JSON.stringify(carrito);
    localStorage.setItem("carrito", guardarCarrito);
    Toastify({
        text: "Producto agregado al carrito!",
        duration: 2500,
        gravity: "top",
        position: "right",
        style: {
          background: "linear-gradient(to right, rgb(34, 34, 78), rgb(33, 189, 163))",
        },
      }).showToast();
      contarProductos();

    //localStorage.setItem( "carrito", carrito)
}

// -------------ELIMINAR DEL CARRITO --------------




//---------------BUSCAR PRODUCTOS ---------------

const busquedaProducto = document.getElementById("busqueda");
function buscarProducto(){
    busquedaArticulo = productos.filter(function(producto) {
    return productos.articulo === busquedaProducto;
    })
    console.log(busquedaArticulo)

    if (busquedaArticulo.length >= 1){   
    //BORRAR LA VISTA DE PRODUCTOS Y MOSTRAR EL ARRAY busquedaArticulo
    for (let i = 0; i < busquedaArticulo.length; i++) {
        const element = busquedaArticulo[i];
        const {id, articulo, marca, precio, img, descripcion1, descripcion2} = element;
    const cardGroup3 = 
    `<div class="row g-0 ubicacionBusqueda" id="${id}"> 
    <div class="col-md-4" >
    <img src=${img} class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
    <div class="card-body">
    <h5 class="card-title">${articulo + " " + marca}</h5>
    <p class="card-text">${descripcion1} <br> ${descripcion2} <br> PRECIO: $ ${precio.toLocaleString()}</p>
    <button class="btn-agregar">Agregar al Carrito</button><br>
    </div>
    </div>
    </div>`

    const vistaBusqueda = document.createElement("div");
    let pTotal = document.createElement("p");
    vistaBusqueda.innerHTML = "<div>"+cardGroup3+"<div>";
    document.body.append(vistaBusqueda);
    
    }
    const botonAgregar = document.getElementsByClassName("btn-agregar");

    for (let i = 0; i < botonAgregar.length; i++) {
    const element = botonAgregar[i];
    element.addEventListener("click", agregarAlCarrito)
}

    }else{
        alert("no se encontraron resultados")
        }
    }
    let btnbuscar = document.getElementById("button-addon2");
    btnbuscar.onclick = () => {
    buscarProducto()
    
    }


//-------------CONTADOR CARRITO DE COMPRA----------------------

const contadorDom = document.getElementById("contador");

function contarProductos(){

    const contador = document.getElementById("contador");
    contador.innerHTML = "";
    const numerito = JSON.parse(localStorage.getItem("carrito"));
    const visualizacion = numerito.length;
    contador.append(visualizacion);
}

