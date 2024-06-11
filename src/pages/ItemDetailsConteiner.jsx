import React, { useEffect } from 'react'
import { Item } from '../components/Item/Item'
import { useParams } from 'react-router-dom'
import { useProductById } from '../components/hooks/useProductsById'

const ItemDetailsConteiner = () => {

    const {itemId} = useParams();
    const { product } = useProductById(itemId);

  return (
    <div >
        <Item product={product}/>
    </div>
  )
}

export default ItemDetailsConteiner