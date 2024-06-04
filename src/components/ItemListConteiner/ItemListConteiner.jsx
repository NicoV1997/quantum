import React from "react";
import { useState, useEffect } from "react";
import { getAllProducts } from "../../services/productsServices";

//Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ItemCount } from "../ItemCount/ItemCount";



const ItemListConteiner = ({greeting}) => {

    const customStyles = {
        color: 'white',
        fontSize: '2rem'
    }


    const [products, setProducts] = useState([]) // Se pone un array vacio, por que products nos responde con un array, y tenemos que ser consecuentes.

    useEffect(() => {  
        getAllProducts().then((res) => {
            setProducts( res.data.products);
            console.log(res.data.products)
        }).catch((err) => {
            console.log(err)
        })
    }, []) // creamos un useEffect con dependencia vacia, siempre que llamamos a una API necesitamos usar un useEffect. Usamos la promesa de productsServices

    return <div className="itemListConteiner">
        {products.map(product => {
            return (
            <Card key={product.id} style={{ width: '18rem' }}>
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
    </div>

}

export default ItemListConteiner;










// prueba en clase de como traer productos de forma local 
/* const myProducts = [
    {
        id: 1,
        name: "Motherboard ASUS 95XGD",
        description: "Mother para INTEL",
        price: 200,
        stock: 10,
        category: "Motherboards"
    },
    {
        id: 2,
        name: "Motherboard Gigabyte 3999",
        description: "Mother para INTEL, con socket 2024",
        price: 230,
        stock: 5,
        category: "Motherboards"
    }
]

return (
    <div style={customStyles}>
        {
            myProducts.map((product) => {
                return (
                    <div key={product.id}> 
                        <li>{product.name}</li>
                        <li>{product.description}</li>
                        <li>{product.price}</li>
                        <li>{product.category}</li>
                    </div>
                )
            })
        }
    </div>
) */