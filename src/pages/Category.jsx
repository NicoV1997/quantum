import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { ItemCount } from '../components/ItemCount/ItemCount';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';
import { useProductsByCategory } from '../components/hooks/useProductsByCategory';

const Category = () => {
  const { category } = useParams();
  const { products, loading } = useProductsByCategory(category);

  if (loading) {
    return <LoaderComponent />;
  }

  return (

    <div>
      <h1 style={{marginLeft: '1rem', marginTop: '1rem', fontSize: '2rem'}}>Estos son los productos de la categoría {category}:</h1>
    <div className="itemListContainer" style={{display: 'flex'}}>
      {products.map(product => (
        <Card key={product.id} style={{ width: '18rem', margin: '10px' }}>
          <Link to={`/item/${product.id}`}>
            <Card.Img variant="top" src={product.thumbnail} />
          </Link>
          <Card.Body>
            <Card.Title>
              <Link to={`/item/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                {product.name}
              </Link>
            </Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Link to={`/item/${product.id}`}>
                <button className="addButton">
                <div className="text-agregar">Ir al detalle</div>
                </button>
              </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
    </div>
  );
};

export default Category;