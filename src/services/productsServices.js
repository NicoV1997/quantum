import axios from "axios";

export const getAllProducts = () => {
    return axios.get("https://dummyjson.com/products?limit=0");
}

export const getProductsById = (itemId) => {
    return axios.get(`https://dummyjson.com/products/${itemId}`)
}

