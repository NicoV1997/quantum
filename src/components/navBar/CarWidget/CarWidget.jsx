import './CarWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';




const CarWidget = () => {

    const { totalItems } = useContext(CartContext);
    

    return (
        <div className="carwidget">
        <a href=""><div className="material-icons car" >
        shopping_cart
        </div>
        <p className='not'>
            {totalItems}
        </p>
        </a>
        </div>
    )

}

export default CarWidget;