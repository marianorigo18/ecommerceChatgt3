// creamos un array vacio para guardar los productos seleccionados
let cart = [];

// creamos una funcion para agregar productos al carrito
function addToCart(product) {
    cart.push(product);
    console.log(product.name + " ha sido agregado al carrito!");
}

// creamos una funcion para mostrar los productos en el carrito
function showCart() {
    for (let i = 0; i < cart.length; i++) {
        console.log(cart[i].name + " - $" + cart[i].price);
    }
}

// creamos unos productos de ejemplo
let product1 = { name: "Product 1", price: 19.99 };
let product2 = { name: "Product 2", price: 29.99 };
let product3 = { name: "Product 3", price: 39.99 };

// agregamos los productos al carrito
addToCart(product1);
addToCart(product2);
addToCart(product3);

// mostramos los productos en el carrito
showCart();
