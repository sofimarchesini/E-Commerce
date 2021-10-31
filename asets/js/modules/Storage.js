
class Storage{
    static saveProduct(products){
        localStorage.setItem("products",JSON.stringify(products));
    }

    static getProduct(id){
        let products = JSON.parse(localStorage.getItem("products"));
        return products.find(product => product.id = id);
    }

    static saveCart(cart){
        localStorage.setItem("Cart",JSON.stringify(cart));
    }
}