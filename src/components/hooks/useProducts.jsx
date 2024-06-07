import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../services/productsServices";

export const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then((response) => {
                setProducts(response.data)
            }).catch((err) => {
                console.error(err)
            })
    }, [])
    
    return {products}
}