const products = [
  { id: 1, name: "Product 1", price: 3, image: "https://placehold.co/300x300.jpg" },
  { id: 2, name: "Product 2", price: 5, image: "https://placehold.co/300" },
  { id: 3, name: "Product 3", price: 1, image: "https://placehold.co/300" }
];

console.log(window.location);
console.log("Searchbar:", window.location.search);

function fetchParams(key) {
    const paramString = window.location.search;
    const param = new URLSearchParams(paramString);
    return param.get(key);
}

function productTemplate(product) {
    return `<section class = "product">
    <img src ="${product.image}" alt ="image of ${product.name}">
    <div class = "product-details">
    <h1> ${product.name}</h1>
    <p> Price: $${product.price}</p>
    </div>
    </section>`;
}

/*function productDetails() {
    const productId = fetchParams("productId");
    if (productId) {
        const foundProduct = products.find((product) => product.id == product.id);
        if (foundProduct) {
            output("main", productTemplate(product));
        }
    }
}
    Couldn't figure this one out for the life of me
*/

function productDetails() {
  const id = fetchParams("productId");
  if (id) {
    const product = products.find((p) => p.id == id);
    if (product) {
      output("main", productTemplate(product));
    }
  }
}

function output(selector, markup) {
    const pageElement = document.querySelector(selector);
    pageElement.insertAdjacentHTML("beforeEnd", markup);
}

productDetails();