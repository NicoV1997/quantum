import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { ItemCount } from '../components/ItemCount/ItemCount';
import { getProductsById } from '../services/productsServices';



const ItemDetailsConteiner = () => {

  const [product, setProduct] = useState({})

  const {itemId} = useParams();

  useEffect(() => {
    getProductsById(itemId)
      .then((res) => {setProduct(res.data)})
      .catch((err) => {console.log(err)})
  }, [])

  return (
      <Card key={product.id} style={{ width: '18rem', margin: '10px'}}>
      <Card.Img variant="top" src={product.thumbnail}/>
      <Card.Body>   
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text>
          Precio: {product.price}
        </Card.Text>
        <Card.Text>
          Rating: {product.rating}
        </Card.Text>
        <ItemCount stock={10} initial={1} onAdd={(count) => alert(`Se agregaron ${count} productos al carrito`)}/>
      </Card.Body>
      </Card>
  )
}

export default ItemDetailsConteiner

{/* <div className="itemListConteiner">
        {products.map(product => {
            return (
            <Card key={product.id} style={{ width: '18rem', margin: '10px'}}>
            <Card.Img variant="top" src={product.thumbnail}/>
            <Card.Body>   
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <ItemCount stock={10} initial={1} onAdd={(count) => alert(`Se agregaron ${count} productos al carrito`)}/>
            </Card.Body>
            </Card>
        )})}
    </div> */}