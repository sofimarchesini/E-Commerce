
const cartDOM = document.querySelector(".cart");
const cartbutton = document.querySelector(".cart-button");
const cartoverlay = document.querySelector(".cart-overlay") ;
const closecart = document.querySelector(".close-cart");
let button = document.querySelectorAll(".button");
const cartContent = document.querySelector(".cart-content");
const cartTotal = document.querySelector(".cart-total");

let carrito = [];


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

for ( let boton of button ){
    boton.addEventListener("click",añadirProducto);
}

function añadirProducto(e){
    let hijo = e.target;
    let padre = hijo.parentNode.parentNode;
    let name = padre.querySelector(".name").textContent;
    let price = padre.querySelector(".price").textContent;
    let image = padre.querySelector("img").src;
    const producto = new Producto(name,price,2,image);
    carrito.push(producto);
    actualizarCarrito(producto);
    actualizarTotal(carrito);
}


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

function actualizarCarrito(item) {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `<!-- cart item -->
            <!-- item image -->
            <img src=${item.image} alt="product" />
            <!-- item info -->
            <div>
              <h4>${item.name}</h4>
              <h5>${item.price}</h5>
              <span class="remove-item" data-id=${item.id}>
                <i class="far fa-trash-alt"></i>
              </span>
            </div>
            <!-- item functionality -->
            <div>
                <i class="fas fa-chevron-up" data-id=${item.id}></i>
              <p class="item-amount">${item.amount}
                
              </p>
                <i class="fas fa-chevron-down" data-id=${item.id}></i>
            </div>
          <!-- cart item -->
    `;
    cartContent.appendChild(div);
}

function actualizarTotal(cart){
    let tempTotal=0;
    console.log(cart);
    cart.map(item => {
         tempTotal += parseInt(item.price);
    });
    
    console.log(tempTotal);
    cartTotal.innerText = tempTotal;
}