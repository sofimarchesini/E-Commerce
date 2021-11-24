
     const items = [
        {
            name:"JACKET1",
            price: 12500,
            id : 1,
            image:"multimedia/fotocatalogo1.jfif"
            
        },
        {
            id: 2,
            name:"WINDBREAKER1",
            price: 12500,
            image:"multimedia/fotocatalogo2.jfif"
        
        },
        {
            id: 3,
            name: "WINDBREAKER2",
            price:23000,
            image:"multimedia/fotocatalogo3.jfif"
            
        },
        {   
            id:4,
            name:"JACKET2",
            price:1750,
            image:"multimedia/fotocatalogo4.jfif"
            
        },
        {
            id: 5,
            name: "COAT1",
            price:38000,
            image:"multimedia/fotocatalogo5.jfif"
        },
        {
            id: 6,
            name: "JACKET4",
            price: 8900,
            image:"multimedia/fotocatalogo6.jfif"
        },
        {
            id: 7,
            name: "SHIRT1",
            price:3890,
            image:"multimedia/fotocatalogo7.jfif"
        },
        {
            id: 8,
            name: "JACKET5",
            price:19500,
            image:"multimedia/fotocatalogo8.jfif"
        }

    ]

const productos = [];

for (const item of items) {
    productos.push(new Producto(item.id,item.name,item.price,item.image,item.description))
};