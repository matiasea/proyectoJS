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

//_________________________________

const productos = [
    {id: 001, articulo: "LAVARROPAS", marca: "Philco", precio: 58000, img: "../img/lavarropas.jpg", descripcion1: "Capacidad 6Kg.", descripcion2: "Centrifugado 800 RPM"},
    {id: 002, articulo: "HELADERA", marca: "Patrick", precio: 65000, img: "../img/heladera.jpg", descripcion1: "Capacidad: 329LTS", descripcion2: "Dispenser de Agua"},
    {id: 003, articulo: "COCINA", marca: "Longvie", precio: 49000, img: "../img/cocina.jpg", descripcion1: "Luz en horno", descripcion2: "Encendido Electrico"},
    {id: 004, articulo: "TV SMART", marca: "Samsung", precio: 35000, img: "../img/TV.jpg", descripcion1: "Tecnologia Smart", descripcion2: "Resolucion UHD"},
    {id: 005, articulo: "TOSTADORA", marca: "Atma", precio: 5000, img: "../img/tostadora.jpg", descripcion1: "1000 W", descripcion2: "Capacidad 2 panes"},
    {id: 006, articulo: "EXPRIMIDOR", marca: "Philips", precio: 4500, img: "../img/exprimidor.jpg", descripcion1: "0,5 LTS", descripcion2: "300 W"},
    ];

const carrito = []
//const verCarrito = []

for (let i = 0; i < productos.length; i++) {
    const element = productos[i];
    const {articulo, marca, precio, img, descripcion1, descripcion2} = element;
    const cardGroup = document.getElementsByClassName("card-group")
    const dom = `<div class="card" id="${marca}">
                    <img src=${img} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${articulo + " " + marca}</h5>
                        <p class="card-text">${descripcion1} <br> ${descripcion2} <br> PRECIO: $ ${precio}</p>
                        <button class="btn-agregar">Agregar al Carrito</button><br>
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

function agregarAlCarrito(e){
    const prod = (e.target).parentNode.parentNode;
    const id = prod.getAttribute("id");
    const productoEncontrado = productos.find((item) => item.marca == id);
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

    //localStorage.setItem( "carrito", carrito)
}

//BUSCAR PRODUCTO
let busquedaProducto = document.getElementById("busqueda");
function buscarProducto(){
    let busquedaArticulo = productos.filter(function(productos) {
    return productos.articulo === busquedaProducto;
    })
    console.log(busquedaArticulo)
    }

    let btnbuscar = document.getElementById("btn-buscar");
    btnbuscar.addEventListener("click", buscarProducto);
