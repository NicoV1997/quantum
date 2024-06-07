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

    return <div >
        <div className="secondary-buttons">
        <button className="secondary-button" onClick={decrement} ><div className="text-agregar">-</div></button>
                <div className="count">{count}</div>
        <button className="secondary-button" onClick={increment} ><div className="text-agregar">+</div></button>
        </div>
        <button className="addButton" onClick={() => onAdd(count)}>
            <div className="text-agregar">Agregar al carrito</div>
        </button>
    </div>
}
