
//CREO MIS VARIABLES

const cartDOM = document.querySelector(".cart");
const cartbutton = document.querySelector(".cart-button");
const cartoverlay = document.querySelector(".cart-overlay") ;
const clearCartBtn = document.querySelector(".clear-cart");
const closecart = document.querySelector(".close-cart");
const cartContent = document.querySelector(".cart-content");
const cartTotal = document.querySelector(".cart-total");
const products = document.querySelector(".grid-container-woman"); 
const cartRemove = document.querySelector(".remove-item"); 
const cartUp = document.querySelector(".cart-up"); 
const cartDown = document.querySelector(".cart-down"); 


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

// FUNCIONES DE CARRITO

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
              <span class="remove-item" id="${item.id}-remove">
                <i class="far fa-trash-alt"></i>
              </span>
            </div>
            <!-- item functionality -->
            <div>
                <i class="fas fa-chevron-up cart-up" id="${item.id}-up"></i>
              <p class="item-amount">1</p>
                <i class="fas fa-chevron-down cart-down" id="${item.id}-down"></i>
            </div>
          <!-- cart item -->
    `;
    cartContent.appendChild(div);
    if(cart.length==1) {showCart()};
    $(`#${item.id}-up`).on("click",()=> {prodIncr(item)});
    $(`#${item.id}-down`).on("click",()=>{prodDecr(item)});
    $(`#${item.id}-remove`).on("click",()=>{removeProd(item)});
    saveOnStorage();

}

function freshTotal(cart){
    let tempTotal=0;
    cart.map(item => {
         tempTotal += parseInt(item.price*item.cantidad);
    });
    cartTotal.innerText = tempTotal;
}

function clearTotal(){
    cartTotal.innerText = 0;
}


// BOTONES

function removeProd(prod){
    const element = document.getElementById(`${prod.id}-cart`);
    cartContent.removeChild(element);
    cart = cart.filter(producto => producto.id !== prod.id);
    saveOnStorage();
    freshTotal(cart);
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

function prodIncr(prod){
    const item = cart.find(producto => producto.id === prod.id);
    item.cantidad++;
    let amount = document.getElementById(`${item.id}-cart`).getElementsByClassName("item-amount")[0];
    amount.innerHTML = item.cantidad;
    saveOnStorage();
    freshTotal(cart);

}

function prodDecr(prod){
    const item = cart.find(producto => producto.id === prod.id);
    if(item.cantidad==1){
        removeProd(prod);
    }else{
        item.cantidad--;
        let amount = document.getElementById(`${item.id}-cart`).getElementsByClassName("item-amount")[0];
        amount.innerHTML = item.cantidad;
        saveOnStorage();
        freshTotal(cart);
    }
}


$(cartbutton).on("click",showCart);
$(closecart).on("click",hideCart);
$(clearCartBtn).on("click",clearCart);



// FUNCIONES PARA INICIALIZAR PRODUCTOS 

function generateCard(prod){
    const div = document.createElement("div");
    div.classList.add("cardd");

    div.innerHTML =`<!--  card --> 
                <div id="prod-${prod.id}">
                <img class="woman-img" src=${prod.image} alt="Double-breasted jacket in a straight cut featuring a V neck"/>
                <button class= "mt-4 button-add" id="${prod.id}"><p class="carrito-title">Añadir a Carrito</p></button><br/>
                <p><strong class="name">${prod.name}</strong><br />Double-breasted jacket in a straight cut featuring a V neck<br/>
                    <strong>$<span class="price">${prod.price}</span></strong></p>
                </div>
            <!-- card -->`

    products.appendChild(div);
}


for ( let prod of productos){
    generateCard(prod);
    $(`#${prod.id}`).on("click",()=> {
        addCart(prod);
        freshTotal(cart);
        $(`#prod-${prod.id}`).slideUp("fast", ()=>{
            $(`#prod-${prod.id}`).fadeIn("fast");
        });
        saveOnStorage();
    });

}

//AJAX API

$.get( "http://api.openweathermap.org/data/2.5/weather?q=buenos+aires&APPID=7387efc3f2b32833225b06cb0e56c2b8", function( datos ) {
    let clouds = datos.clouds.all
    let clima = Math.round((datos.main.temp - 273)*10)/10;
    if( clima>27) $("#tips").html("Hoy es el dia perfecto para comprar una malla");
    if (clima<10) $("#tips").html("Hoy es el dia perfecto para comprar una sweter");
    if(clouds == 1 && clima>22) $("#tips").html("Hoy es el dia perfecto para comprar unos High Heals");
    if(clima>10 && clima<27)  $("#tips").html("Hoy es el dia perfecto para comprar algo suelto");
});



