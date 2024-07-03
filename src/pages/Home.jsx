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
        <img src="/images/quantumBanner.png" alt="banner" style={{maxWidth: '100%', marginTop: '0.5rem'}}/>
        <div>
          <h3 style={{marginLeft: '1rem', marginTop: '1rem', marginBottom: '1rem'}}>Productos destacados:</h3>
        <ItemListConteiner products={products}/>
        </div>
    </div>
  )
}

export default Home
