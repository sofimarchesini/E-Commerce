
const cartDOM = document.querySelector(".cart");
const cartbutton = document.querySelector(".cart-button");
const cartoverlay = document.querySelector(".cart-overlay") ;
const clearCartBtn = document.querySelector(".clear-cart");
const closecart = document.querySelector(".close-cart");
const cartContent = document.querySelector(".cart-content");
const cartTotal = document.querySelector(".cart-total");
const products = document.querySelector(".grid-container-woman"); 

// INICIALIZO EL CARRITO Y ME FIJO SI YA EXISTE EN LOCAL STORAGE 

let cart = [];
const LScart = localStorage.getItem("cart");

if (LScart) {
    cart = JSON.parse(LScart);
    cart.map(producto => {
        addAndShowCart(producto);
    });
};


function saveOnStorage() {
    let storageItem = localStorage.setItem('cart', JSON.stringify(cart));
    return storageItem;
};


//-----------------------------------


function addCart(producto){
    const prod = cart.find(prod => prod.id === producto.id);
    if (prod) {
        prod.cantidad++;
        let amount = document.getElementById(`${prod.id}-cart`).getElementsByClassName("item-amount")[0];
        amount.innerHTML = prod.cantidad;
    } else { addAndShowCart(producto);};
}

function addAndShowCart(item) {
    const prod = cart.find(prod => prod.id === item.id);

    if (!prod) {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            cantidad: 1,
        });
    }

    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.id = `${item.id}-cart`;
    div.innerHTML = `<!-- cart item -->
            <!-- item image -->
            <img class="image-item" src=${item.image} alt="product" />
            <!-- item info -->
            <div class="info-item">
              <h4 class="name-item">${item.name}</h4>
              <h5 class="price-item">${item.price}</h5>
              <span class="remove-item" id=${item.id}>
                <i class="far fa-trash-alt"></i>
              </span>
            </div>
            <!-- item functionality -->
            <div>
                <i class="fas fa-chevron-up" id=${item.id}></i>
              <p class="item-amount">1</p>
                <i class="fas fa-chevron-down" id=${item.id}></i>
            </div>
          <!-- cart item -->
    `;
    saveOnStorage();
    cartContent.appendChild(div);
    if(cart.length==1) {showCart()};
}

function initializeProducts(){
    productos.forEach(prod => generateCard(prod));
}

function generateCard(prod){
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML =`<!--  card --> 
                <div>
                <img class="woman-img" src=${prod.image} alt="Double-breasted jacket in a straight cut featuring a V neck"/>
                <button class= "mt-4 button-add" id="${prod.id}"><p class="carrito-title">Añadir a Carrito</p></button><br/>
                <p><strong class="name">${prod.name}</strong><br />Double-breasted jacket in a straight cut featuring a V neck<br/>
                    <strong>$<span class="price">${prod.price}</span></strong></p>
                </div>
            <!-- card -->`

    products.appendChild(div);
}

function addButton(){
    for ( let prod of productos){
        document.getElementById(`${prod.id}`).addEventListener("click",()=> {
            addCart(prod);
            freshTotal(cart);
            saveOnStorage();});
    }
}

function showCart(){
    cartoverlay.classList.add("transparentBcg");
    cartDOM.classList.add("showCart");
}

function hideCart(){
    cartoverlay.classList.remove("transparentBcg");
    cartDOM.classList.remove("showCart");
}

function clearCart(){
    cart = [];
    cartContent.innerHTML = "";
    clearTotal();
    saveOnStorage();
}

cartbutton.addEventListener("click", showCart);
closecart.addEventListener("click", hideCart);
clearCartBtn.addEventListener("click",clearCart);



function freshTotal(cart){
    let tempTotal=0;
    cart.map(item => {
         tempTotal += parseInt(item.price);
    });
    cartTotal.innerText = tempTotal;
}

function clearTotal(){
    cartTotal.innerText = 0;
}


function setearProducto(name,price,datosProducto){
    let id = Object.keys(datosProducto).length+1;
    let producto = new Producto(name,price,id);
    datosProducto[id] = producto;
}

function main(){
    initializeProducts();
    addButton();
}

main();
