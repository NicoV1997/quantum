import React, { useEffect } from 'react'
import ItemListConteiner from '../components/ItemListConteiner/ItemListConteiner'

const Home = () => {

    useEffect(() => {
        document.title = "Home"
    }, [])

  return (
    <div>
        <ItemListConteiner />
    </div>
  )
}

export default Home
