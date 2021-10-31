const cartDOM = document.querySelector(".cart");

const cartbutton = document.querySelector(".cart-button");
const cartoverlay = document.querySelector(".cart-overlay") ;
const closecart = document.querySelector(".close-cart");
// funcion para añadir productos nuevos al stock

//const LScart = localStorage.getItem("cart");

// si existe el carrito en local storage lo carga en memoria y lo muestra en el dom
/**if (LScart) {
    cart = JSON.parse(LScart);
    cart.map(producto => {
        addAndShowCart(producto);
    });
    renderPurchBtn();
};**/


function setearProducto(name,price,datosProducto){
    let id = Object.keys(datosProducto).length+1;
    let producto = new Producto(name,price,id);
    datosProducto[id] = producto;
}
//Funcion para continuar con el pago

function continuarPago(){
    //llama a otra pag con formulario, no desarrollada porque aun no lo vimos
}

//-----------------------------------

let button = document.querySelectorAll(".button");
let carrito = [];

for ( let boton of button ){
    boton.addEventListener("click",añadirProducto);
}

function añadirProducto(e){
    let hijo = e.target;
    let padre = hijo.parentNode.parentNode;

    let name = padre.querySelector(".name").textContent;
    let price = padre.querySelector(".price").textContent;
    const producto = new Producto(name,price,2);
    carrito.push(producto);
    actualizarCarrito(producto);
}
/** 
function actualizarCarrito(producto){

    let fila = document.createElement("tr"); 

    fila.innerHTML = `<td>${producto.name}</td>
                        <td>${producto.price}</td>
                        <td><button class="btn btn-danger">Eliminar</button></td>
                    `
    console.log(fila);
    let tbody = document.getElementById("tbody");
    tbody.appendChild( fila );
    
}*/

function showCart(){
    cartoverlay.classList.add("transparentBcg");
    cartDOM.classList.add("showCart");
}

function hideCart(){
    cartoverlay.classList.remove("transparentBcg");
    cartDOM.classList.remove("showCart");
}



cartbutton.addEventListener("click", showCart);
closecart.addEventListener("click", hideCart);