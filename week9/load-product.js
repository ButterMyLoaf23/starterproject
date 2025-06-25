export async function getProducts() {
    const response = await fetch("./dental.json")
    if (response.ok) {
        const products = await response.json();
        if (products) {
            return products
        }
        else {
            console.error("Error finding products")
        }
    }
}