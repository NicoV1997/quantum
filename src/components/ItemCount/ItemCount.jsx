import React, { useState } from "react";

//Bootstrap

import "./ItemCount.css";


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
        <div className="secondary-buttons">
        <button className="secondary-button" onClick={decrement} >-</button>
                <div className="count">{count}</div>
        <button className="secondary-button" onClick={increment} >+</button>
        </div>
        <button className="addButton" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
}



{/* <Button size="sm" onClick={decrement} >-</Button>
                {count}
           <Button size="sm" onClick={increment} >+</Button>
           <Button variant="secondary" size="sm" onClick={() => onAdd(count)}>
            Agregar al carrito
            </Button> */}