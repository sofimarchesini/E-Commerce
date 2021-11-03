
class Cart{
    constructor(datosProducto){
        this.products = {};
        this.datosProducto = datosProducto;
    }

    saveOnStorage() {
        let storageItem = localStorage.setItem('cart', JSON.stringify(cart));
        return storageItem;
    };

    añadirProducto(prod){
        if (!this.products[prod.id]) this.products[prod.id] = 1;
        else this.products[prod.id]++; 
        this.calcularPrecioTotal();
    }

    elminarProducto(prod){
        if (!this.products[prod.id]) return;
        else this.products[prod.id]--; 
    }

    vaciarCarrito(){
        this.products = null;
    }

    calcularPrecioTotal(){
        let total = 0;
        for (const id in this.products) total += (this.products[id])*this.datosProducto[id].price;
        console.log("EL precio total de lo añadido al carrito es: "+total);
    }

    devolverProductos(){
        console.log(this.products);
    }

    agregarCantidad(id){
        this.products[id]++; 
        this.calcularPrecioTotal();

    }

    sugerencias(){
    }
}
