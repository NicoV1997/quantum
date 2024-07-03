import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Card, CardContent } from "@mui/material";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

const Cart = () => {
  const { cart, reduceCart, deleteFromCart, addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      calculateTotalPrice();
    }, 1500); // Pausa de 2 segundos como se pide en el trabajo
  }, []); // Dependencias vacías para ejecutar una vez al montar el componente

  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  };

  const handleRemoveOne = (item) => {
    reduceCart(item, 1);
    calculateTotalPrice();
  };

  const handleAddOne = (item) => {
    addToCart(item, 1);
    calculateTotalPrice();
  };

  const handleDeleteItem = (item) => {
    deleteFromCart(item);
    calculateTotalPrice();
  };

  const handleProceedToCheckout = () => {
    // Lógica para proceder con la compra
    alert("Proceder con la compra...");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Carrito de Compras
      </h1>
      {loading ? (
        <LoaderComponent />
      ) : cart.length > 0 ? (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flex: "70%", paddingRight: "20px" }}>
            {cart.map((item, index) => (
              <Card key={index} style={{ marginBottom: "20px" }}>
                <CardContent style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    style={{ maxWidth: "100px", marginRight: "20px" }}
                  />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>Precio unitario: ${item.price}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <Button
                      variant="outlined"
                      style={{ marginRight: "10px" }}
                      onClick={() => handleRemoveOne(item)}
                    >
                      -
                    </Button>
                    <Button
                      variant="outlined"
                      style={{ marginRight: "10px" }}
                      onClick={() => handleAddOne(item)}
                    >
                      +
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => handleDeleteItem(item)}
                    >
                      Eliminar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div style={{ flex: "30%", textAlign: "right" }}>
            <Card>
              <CardContent>
                <h3 style={{ marginBottom: "20px" }}>Resumen de Compra</h3>
                {cart.map((item, index) => (
                  <div key={index} style={{ marginBottom: "10px" }}>
                    <p>
                      {item.name}: ${item.price * item.quantity}
                    </p>
                  </div>
                ))}
                <hr />
                <div style={{ marginTop: "10px", textAlign: "right" }}>
                  <h3>Total: ${totalPrice}</h3>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleProceedToCheckout}
                  >
                    Proceder con la compra
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>Tu carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;
