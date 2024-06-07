import axios from "axios";

export async function getAllProducts () {
    return axios.get("https://dummyjson.com/products?limit=0");
}

export async function getProductsById (itemId) {
    return axios.get(`https://dummyjson.com/products/${itemId}`)
}

export async function getProductsByCategory (category) {
    return axios.get(`https://dummyjson.com/products/category/${category}`)
}

export async function getAllCategories () {
    return axios.get('https://dummyjson.com/products/categories')
}
