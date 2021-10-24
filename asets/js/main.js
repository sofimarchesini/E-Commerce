


// datos preseteados

let prod1 = new Producto("JACKET1",12.500,1);
let prod2 = new Producto("WINDBREAKER1",12.500,2);
let prod3 = new Producto("WINDBREAKER2",23.000,3);
let prod4 = new Producto("JACKET2",1.750,4);
let prod5 = new Producto("COAT1",38.000,5);
let prod6 = new Producto("JACKET4",8.900,6);
let prod7 = new Producto("SHIRT1",3.890,7);
let prod8 = new Producto("JACKET5",19.500,8);

var datosProducto = {1:prod1,2:prod2,3:prod3,4:prod4,5:prod5,6:prod6,7:prod7,8:prod8};

// funcion para añadir productos nuevos al stock

const LScart = localStorage.getItem("cart");

// si existe el carrito en local storage lo carga en memoria y lo muestra en el dom
if (LScart) {
    cart = JSON.parse(LScart);
    cart.map(producto => {
        addAndShowCart(producto);
    });
    renderPurchBtn();
};


function añadirProducto(){
    let texto = document.createElement("p");
    texto.innerHTML = "Agregado";
    console.log(texto);
    //cart.añadirProducto();
    //cart.saveOnStorage();

}

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


//localStorage.setItem(nombreCliente,apellidoCliente);
//sessionStorage.setItem("hola",saludo);
// button class= onclick="funcion()"
// getElementById("ID") -> todo el nodo
// <input type="text" id="usuario" >
// quiero trear mi input -> document.getElementById("usuario");
// usuario.value
// let parrafo = document.createElement("p");
//parrafo.innerHtml = "Enviado"
//let mensaje = document.getElementById("mensaje");
// ver visualmente -> mensaje.appendChild(parrafo);