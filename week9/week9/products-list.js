import { getProducts } from "./load-product.js"


async function showProducts(id) {
    const products = await getProducts()
    const product = products.find(p => p.id === id);
    if (!products){
        console.error("Product not found")
        return;
    }
    
    document.querySelector("section").innerHTML = 
    `
        <h2>${product.name}</h2>
        <p><img src="${product.imageUrl}" alt="${product.name}"></p>
        <p>${product.description}</p>
        <p><span class="price">$${product.price}</span></p>

    `
}

const overlayContainer = document.querySelector('.overlay.container');
const signUpButton = document.querySelector('.signup-button');

function dismissOverlay(){
    
}



if (products) {
        document.getElementById("products-list").innerHTML = ""
        products.array.forEach((products) => {
            const productLinks = document.createElement("li")
            productLinks.innerHTML = `<a href ="product-lists.html?id=${product.id}">${product.name}</a>`
            document.getElementById("products-list").appendChild(productLinks);       
        });
    }


showProducts()