import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { CartContext } from '../../context/CartContext';
import '../ItemCount/ItemCount.css';
import LoaderComponent from '../LoaderComponent/LoaderComponent';




      export const Item = ({product}) => {
        const [loading, setLoading] = useState(true);
        const { addToCart, reduceCart } = useContext(CartContext)
        const [quantity, setQuantity] = useState(0);
        
          useEffect(() => {
            setTimeout(() => {
              if (product) {
                  setLoading(false); 
                } else {
                  setLoading(false); 
                }
            }, 1500); // Pausa de 2 segundos como se pide en el trabajo
          }, []); // Dependencias vacías para ejecutar una vez al montar el componente
        
          if (loading) {
            return <LoaderComponent /> // Necesito devolver un mensaje mientras tanto.
          }

        // ESTADO DEL CARRITO//////////////////////////////
        const handleAdd = () => { // esto es un actualizador local, de cada producto individual.
          setQuantity (quantity + 1)
          addToCart(product, 1);
        }

        const handleReduce = () => {
          setQuantity (quantity - 1)
          reduceCart(product, 1);
        }

        // ESTADO DEL CARRITO//////////////////////////////

        const isSmallScreen = window.innerWidth <= 510;
        const cardStyle = {
          margin: '10px',
          width: '95vw',
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
        };

    return (
      <Card key={product.id} style={cardStyle}>
        <Carousel interval={2000} style={{ width: isSmallScreen ? '100%' : '60%' }}>
          <Carousel.Item>
            <img
              src={product.thumbnail}
              alt="Main"
              style={{ maxWidth: '100vw', height: '30vh', objectFit: 'contain', display: 'block', margin: 'auto' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={product.thumbnail2}
              alt="Second"
              style={{ maxWidth: '100vw', height: '30vh', objectFit: 'contain', display: 'block', margin: 'auto' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={product.thumbnail3}
              alt="Third"
              style={{ maxWidth: '100vw', height: '30vh', objectFit: 'contain', display: 'block', margin: 'auto' }}
            />
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <Card.Title><div style={{ fontSize: '40px' }}>{product.name}</div></Card.Title>
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
          <div>
            <div className="secondary-buttons">
              <button className="secondary-button" onClick={handleReduce}><div className="text-agregar">-</div></button>
              <div className="count">{quantity}</div>
              <button className="secondary-button" onClick={handleAdd}><div className="text-agregar">+</div></button>
            </div>
            <button className="addButton" onClick={() => onAdd(quantity)}>
              <div className="text-agregar">Agregar al carrito</div>
            </button>
          </div>
        </Card.Body>
      </Card>
    );
  }
