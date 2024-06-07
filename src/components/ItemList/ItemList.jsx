import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount';
import { getAllProducts } from '../../services/productsServices';
import "./ItemList.css";
import { Link } from 'react-router-dom';


export const ItemList = () => {
    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true); 
  
    useEffect(() => {
      setTimeout(() => {
        getAllProducts()
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
    }, []); // Dependencias vacías para ejecutar una vez al montar el componente
  
    if (loading) {
      return <div>Cargando...</div>; // Necesito devolver un mensaje mientras tanto.
    }
    
    return  <div className="itemListConteiner">
        {products.map(product => {

            if (product.category === 'smartphones' || 
            product.category === 'tablets' || 
            product.category === 'mobile-accessories' || 
            product.category === 'laptops') {
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
        )}})}
    </div>
}