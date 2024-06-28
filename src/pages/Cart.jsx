import React from "react";
import { CartContext } from "../context/CartContext";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";


const Cart = () => {
    const { cart } = React.useContext(CartContext)

    return (
        <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )

}

export default Cart;