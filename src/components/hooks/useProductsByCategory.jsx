import React from 'react'
import { useState } from 'react'
import { getProductsByCategory } from '../../services/productsServices'

const useProductsByCategory = (category) => {
    const [products, setProducts] = useState()

    useEffect (() => {
        getProductsByCategory(category)
        .then((res) => {
            return(res.data.products)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [category])

  return {products}
}

export default useProductsByCategory