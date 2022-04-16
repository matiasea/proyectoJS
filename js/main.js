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
    {articulo: "LAVARROPAS", marca: "Philco", precio: 58000},
    {articulo: "HELADERA", marca: "Patrick", precio: 65000},
    {articulo: "COCINA", marca: "Longvie", precio: 49000},
    {articulo: "TV", marca: "Samsung", precio: 35000},
    {articulo: "TOSTADORA", marca: "Atma", precio: 5000},
    {articulo: "EXPRIMIDOR", marca: "Philips", precio: 4500},
    ];

const carrito = []
const verCarrito = []

//agregar LAVARROPAS
function agregaProductoLavarropas(e){
    console.log(productos[0]);
    carrito.push(productos[0].precio);
    verCarrito.push(productos[0]);
}

let btnLavarropas = document.getElementById("btn-agrega-lavarropas");
btnLavarropas.addEventListener("click", agregaProductoLavarropas);

//agregar HELADERA
function agregaProductoHeladera(e){
    console.log(productos[1]);
    carrito.push(productos[1].precio);
    verCarrito.push(productos[1]);
}

let btnHeladera = document.getElementById("btn-agrega-heladera");
btnHeladera.addEventListener("click", agregaProductoHeladera);

//agregar COCINA
function agregaProductoCocina(e){
    console.log(productos[2]);
    carrito.push(productos[2].precio);
    verCarrito.push(productos[2]);
}

let btnCocina = document.getElementById("btn-agrega-cocina");
btnCocina.addEventListener("click", agregaProductoCocina);

//agregar TV
function agregaProductoTv(e){
    console.log(productos[3]);
    carrito.push(productos[3].precio);
    verCarrito.push(productos[3]);
}

let btnTv = document.getElementById("btn-agrega-tv");
btnTv.addEventListener("click", agregaProductoTv);

//agregar Tostadora
function agregaProductoTostadora(e){
    console.log(productos[4]);
    carrito.push(productos[4].precio);
    verCarrito.push(productos[4]);
}

let btnTostadora = document.getElementById("btn-agrega-tostadora");
btnTostadora.addEventListener("click", agregaProductoTostadora);

//agregar Exprimidor
function agregaProductoExprimidor(e){
    console.log(productos[5]);
    carrito.push(productos[5].precio);
    verCarrito.push(productos[5]);
}

let btnExprimidor = document.getElementById("btn-agrega-exprimidor");
btnExprimidor.addEventListener("click", agregaProductoExprimidor);


//--------------------------------------------------
//calculartotal

function totalCarrito() {
let total = carrito.reduce((acc, prod) => acc + prod, 0)
console.log("Total compra:" + total)
alert ("El total de tu compra es: $" + total)
localStorage.setItem( "Total", total)
//verCarrito = [] //VER PARA QUE VUELVA EL ARRAY A 0 PARA VER EL ESTADO DEL CARRITO
}

let btnTerminarCompra = document.getElementById("btn-terminar");
btnTerminarCompra.addEventListener("click", totalCarrito);


//busqueda de productos

let busquedaProducto = document.getElementById("busqueda")

 const busquedaArticulo = () => {
    productos.filter((productos) => productos.articulo === busquedaProducto)
   console.log(productos.articulo)

} 

let btnbuscar = document.getElementById("btn-buscar");
btnbuscar.addEventListener("submit", busquedaArticulo);
 

//ver carrito

function verCompra() {
    console.log(verCarrito);
    console.log(JSON.stringify(verCarrito))
    
    const guardarCarrito = JSON.stringify(verCarrito);
    localStorage.setItem("compra", guardarCarrito)

    } 
    
    let btnVerCarrito = document.getElementById("btn-ver-carrito");
    btnVerCarrito.addEventListener("click", verCompra)