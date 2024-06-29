import React, { useEffect } from 'react'
import ItemListConteiner from '../components/ItemListConteiner/ItemListConteiner'
import { useProducts } from '../components/hooks/useProducts'


const Home = () => {
    const { products } = useProducts();

    useEffect(() => {
        document.title = "Home"
    }, [])

  return (
    <div >
        <ItemListConteiner products={products}/>
    </div>
  )
}

export default Home
