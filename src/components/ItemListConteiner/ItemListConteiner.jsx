import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { getAllProducts } from '../../services/productsServices';
import "./ItemListConteiner.css"
import { Link } from 'react-router-dom';
import LoaderComponent from '../LoaderComponent/LoaderComponent';

export const ItemListConteiner = ({products}) => {
    const [loading, setLoading] = useState(true); 
  
    useEffect(() => {
        setTimeout(() => {
          if (products) {
              setLoading(false); 
            } else {
              setLoading(false); 
            }
        }, 1500); // Pausa de 2 segundos como se pide en el trabajo
      }, []); // Dependencias vacías para ejecutar una vez al montar el componente
    
      if (loading) {
        return <LoaderComponent /> // Necesito devolver un mensaje mientras tanto.
      } // Dependencias vacías para ejecutar una vez al montar el componente
    
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
              <Link to={`/item/${product.id}`}>
                <button className="addButton">
                <div className="text-agregar">Ir al detalle</div>
                </button>
              </Link>
            </Card.Body>
            </Card>
        )})}
    </div>
}

export default ItemListConteiner;



// normalmente pondria componente hijo itemlist ///////// import { ItemList } from "../ItemList/ItemList";