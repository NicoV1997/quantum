import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { CartContext } from '../../context/CartContext';
import '../ItemCount/ItemCount.css'




export const Item = ({product}) => {

  // ESTADO DEL CARRITO//////////////////////////////

  const { addToCart, reduceCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => { // esto es un actualizador local, de cada producto individual.
    setQuantity (quantity + 1)
    addToCart(product, 1);
  }

  const handleReduce = () => {
    setQuantity (quantity - 1)
    reduceCart(product, 1);
  }

  // ESTADO DEL CARRITO//////////////////////////////

  return (
      <Card key={product.id} style={{ width: '25rem', margin: '10px'}}>
                    <Carousel interval={2000}>
                      <Carousel.Item>
                        <img src={product.thumbnail} alt="Main" />
                      </Carousel.Item>
                      {product.images &&
                        product.images.map((image, index) => (
                          <Carousel.Item key={index}>
                            <img src={image} alt={`Imagen ${index + 1}`}  style={{ maxWidth: '100vw', maxHeight: '400px', margin: 'auto' }}/>
                          </Carousel.Item>
                        ))}
                    </Carousel>
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
        {/* <ItemCount stock={10} initial={1} onAdd={(count) => alert(`Se agregaron ${count} productos al carrito`)}/> */}
        <div >
        <div className="secondary-buttons">
        <button className="secondary-button" onClick={handleReduce} ><div className="text-agregar">-</div></button>
                <div className="count">{quantity}</div>
        <button className="secondary-button" onClick={handleAdd} ><div className="text-agregar">+</div></button>
        </div>
        <button className="addButton" onClick={() => onAdd(count)}>
            <div className="text-agregar">Agregar al carrito</div>
        </button>
    </div>
      </Card.Body>
      </Card>
  )
}
