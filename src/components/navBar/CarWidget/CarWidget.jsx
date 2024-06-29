import './CarWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';




const CarWidget = () => {

    const { totalItems } = useContext(CartContext);
    

    return (
        <div className="carwidget">
        <Link to='/cart'><div className="material-icons car" >
        shopping_cart
        </div>
        <p className='not'>
            {totalItems}
        </p>
        </Link>
        </div>
    )

}

export default CarWidget;