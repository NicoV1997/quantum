import React, { useState } from "react";

//Bootstrap
import Button from 'react-bootstrap/Button';

export const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial);

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    /* const onAdd = () => {
        alert('Se agregaron ${count} al carrito')
    } */

    return <div>
           <Button onClick={decrement}>-</Button>
                {count}
           <Button onClick={increment}>+</Button>
           <Button variant="secondary" size="lg" onClick={() => onAdd(count)}>
            Agregar al carrito
            </Button>
    </div>
}