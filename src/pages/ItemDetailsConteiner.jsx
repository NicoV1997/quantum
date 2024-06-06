import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { ItemCount } from '../components/ItemCount/ItemCount';


const ItemDetailsConteiner = () => {

  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then((res) => console.log(res)).catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <Card key={id} style={{ width: '8rem' }}>
    <Card.Img variant="top" src={picture}/>
    <Card.Body>
      <Card.Title className="title" style={{fontSize: "0.7rem"}}>{title}</Card.Title>
      <Card.Text className="description" style={{fontSize: "0.5rem"}}>
        {description}
      </Card.Text>
      <Card.Text className="price" style={{fontSize: "0.8rem"}}> 
        Precio: {price}
      </Card.Text>
      <div className="buttons">
        <ItemCount stock={10} initial={1} onAdd={(count) => alert(`Se agregaron ${count} productos al carrito`)}/>
      </div>
    </Card.Body>
    </Card>
    </div>
  )
}

export default ItemDetailsConteiner