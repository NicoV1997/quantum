import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount';
import { getAllProducts } from '../../services/productsServices';

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
    
    return <div className="itemListConteiner">
        {products.map(product => {

            if (product.category === 'smartphones' || 
            product.category === 'tablets' || 
            product.category === 'mobile-accessories' || 
            product.category === 'laptops') {
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
        )}})}
    </div>
}


        {/* <div className="items">
            <div className="item-box">
            <Item id= {1} title= "Teclado Razer Huntsman" description="Teclado óptico para Juegos con latencia de Entrada Casi Cero (interruptores óptico-mecánicos analógicos, Teclas PBT, Cable USB-C Desmontable)" price="112" picture="/images/RzerHuman.jpg" />
            </div>
            <div className="item-box">
            <Item id= {2} title= "Teclado Roccat Vulcan" description="TKL Pro RGB, retroiluminación LED clave por tecla AIMO, interruptores ópticos de titanio, placa superior de aluminio, rueda multimedia" price="100" picture="/images/RocatVulcan.jpg" />
            </div>
            <div className="item-box">
            <Item id= {3} title= "Teclado Mountain Everest" description="Gaming Tastatur - MX Blue, ANSI, US-Layout, Negro" price="90" picture="/images/MountainEverest.jpg" />
            </div>
            <div className="item-box">
            <Item id= {4} title= "Teclado Corsair K95" description="RGB Platinum Teclado Mecánico Gaming, Cherry MX Brown, Táctil y Silencioso, Retroiluminación Multicolor LED RGB, Estructura de Aluminio Anodizado, QWERTY Español, color Negro" price="190" picture="/images/CorsairK95.jpg" />
            </div>
        </div> */}