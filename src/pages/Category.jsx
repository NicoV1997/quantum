import React from 'react';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ItemCount } from '../components/ItemCount/ItemCount';
import { getProductsByCategory } from '../services/productsServices';
import { useParams } from 'react-router-dom';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';


const Category = () => {
  const {category} = useParams();
  const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true); 
  
    useEffect(() => {
      setTimeout(() => {
        getProductsByCategory(category)
          .then((res) => {
            setProducts(res.data.products);
            console.log(res.data.products);
            setLoading(false); // Desactiva el estado de carga
          })
          .catch((err) => {
            console.log(err);
            setLoading(false); // Desactiva el estado de carga en caso de error
          });
      }, 2000); // Pausa de 2 segundos como se pide en el trabajo
    }, [category]); // Dependencias vacías para ejecutar una vez al montar el componente

  
    if (loading) {
      return <LoaderComponent /> // Necesito devolver un mensaje mientras tanto.
    }
    
    return  <div className="itemListConteiner">
        {products.map(product => {
            return (
            <Card key={product.id} style={{ width: '18rem', margin: '10px'}}>
            <Link to={`/item/${product.id}`}><Card.Img variant="top" src={product.thumbnail}/></Link>
            <Card.Body>
              <Card.Title ><Link to={`/item/${product.id}`} style={{textDecoration: "none", color: "black"}}>{product.title}</Link></Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <ItemCount stock={10} initial={1} onAdd={(count) => alert(`Se agregaron ${count} productos al carrito`)}/>
            </Card.Body>
            </Card>
        )})}
    </div>
}

export default Category