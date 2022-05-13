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

let productos = [];

const traerProductos = async () => {
    const resp = await
    fetch('./local.json')
    const data = await resp.json()
    productos.push(...data)
    //console.log(...data)
    productosDom()
}

traerProductos();

const carrito = []

function productosDom(){
    for (let i = 0; i < productos.length; i++) {
    const element = productos[i];
    const {articulo, marca, precio, img, descripcion1, descripcion2} = element;
    const cardGroup = document.getElementsByClassName("card")
    const dom = 
    `<div class="row g-0" id="${marca}"> 
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



function agregarAlCarrito(e){
    const prod = (e.target).parentNode.parentNode.parentNode;
    const id = prod.getAttribute("id");
    const productoEncontrado = productos.find((item) => item.marca == id);
    carrito.push(productoEncontrado);
    console.log(carrito);
    const guardarCarrito = JSON.stringify(carrito);
    localStorage.setItem("carrito", guardarCarrito);
    const contador = document.getElementById("contador1");
    const numerito = carrito.length;
    contador.appendChild(numerito);
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
//FORMA 1
/* const productoBuscado = [];

for (let i = 0; i < productos.length; index++) {
    if (productos[i].articulo === "HELADERA") {
        productoBuscado.push(productos[i].articulo);
    }
    
}

console.log(productoBuscado) */



const busquedaProducto = document.getElementById("busqueda");
function buscarProducto(){
    busquedaArticulo = productos.filter(function(producto) {
    return productos.articulo == "HELADERA";
    })
    console.log(busquedaArticulo)
    }
    //buscarProducto()

    let btnbuscar = document.getElementById("btn-buscar");
    btnbuscar.addEventListener("click", buscarProducto);

//CONTADOR CARRITO DE COMPRA
/* const contador = document.getElementsByClassName("contador")
const numerito = carrito.length;
document.body.append(numerito); */
/* const contador = document.getElementsByClassName("contador")
console.log(contador)

numerito = carrito.length,


 */


