import React from "react";
import { CartContext } from "../context/CartContext";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";


const Cart = () => {
  const { cart, removeFromCart, deleteFromCart } =
    React.useContext(CartContext);

    const [loading, setLoading] = useState(true); 
  
    useEffect(() => {
      setTimeout(() => {
        if (cart.length > 0) {
            setLoading(false); 
          } else {
            setLoading(false); 
          }
      }, 1500); // Pausa de 2 segundos como se pide en el trabajo
    }, []); // Dependencias vacías para ejecutar una vez al montar el componente
  
    if (loading) {
      return <LoaderComponent />
    }


  const handleRemoveOne = (item) => {
    removeFromCart(item, 1);
  };

  const handleDeleteItem = (item) => {
    deleteFromCart(item);
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.length > 0 ? (
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: "10px" }}>
            {cart.map((item, index) => (
              <div
                key={index}
                style={{
                  margin: "10px",
                  border: "1px solid gray",
                  padding: "10px",
                }}
              >
                <img src={item.thumbnail} alt="main" style={{maxWidth: '20vw', maxHeight: '20vh'}}/>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Precio unitario: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <button onClick={() => handleRemoveOne(item)}>-</button>
                <button onClick={() => handleDeleteItem(item)}>Eliminar</button>
              </div>
            ))}
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            {cart.map((item, index) => (
              <div
                key={index}
                style={{ margin: "10px", padding: "10px", textAlign: "right" }}
              >
                <p>Total: ${item.price * item.quantity}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Tu carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;