import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount'; // Asegúrate de importar correctamente tus componentes
import getAllProducts from './productServices'; // Asegúrate de importar correctamente tu servicio

export const Component = () => {
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

