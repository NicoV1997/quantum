import React, { createContext, useState } from "react";

export const CartContext = createContext(); // creamos contenedor de contexto

export const CartProvider = ({ children }) => { // Aca iran los estados que precisamos, recibe children, dependiendo del componente que necesitamos envolver

    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        setCart((prevCart) => { // prevCart se usa para referirse si algo ya existe, se almacena en este caso el valor anterior del carrito 
            const existingProductIndex = prevCart.findIndex(
                (item) => item.id === product.id
                ); // si no existe devuelve un -1 por que es un indice, en el caso de que si, empieza por 0
            
                if (existingProductIndex >= 0) {
                const newCart = [...prevCart];
                newCart[existingProductIndex] = {
                    ...newCart[existingProductIndex], 
                    quantity: newCart[existingProductIndex].quantity + quantity,
                };
                return newCart;
            } else {
                return [...prevCart, { ...product, quantity }];
            }
        });
    };
    
    const reduceCart = (product, quantity) => {
        setCart((prevCart) => {
          return prevCart.reduce((acc, item) => {
            if (item.id === product.id) {
              const newQuantity = item.quantity - quantity;
              if (newQuantity > 0) {
                acc.push({ ...item, quantity: newQuantity });
              }
            } else {
              acc.push(item);
            }
            return acc;
          }, []);
        });
      };

      const deleteFromCart = (product) => { // este codigo nos sirve para eliminar de la pagina del carrito el producto al que toquemos eliminar. 
        setCart((prevCart) => {
          return prevCart.filter((item) => item.id !== product.id);
        });
      }

      const totalItems = cart.length === 0 ? 0 : cart.reduce((total, item) => total + item.quantity, 0);


    return (
        <CartContext.Provider value={{ cart, addToCart, reduceCart, totalItems, deleteFromCart}}> 
            {children}
        </CartContext.Provider>
    );
}