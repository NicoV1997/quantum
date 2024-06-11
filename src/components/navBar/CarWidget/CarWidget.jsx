import './CarWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';



const CarWidget = () => {

    const {cart} = useContext(CartContext)
    /* const totalItems = cart.reduce((total, item) => {
        total + item.quantity, 0
    }) */

    
    return (
        <div className="carwidget">
        <a href=""><div className="material-icons car" >
        shopping_cart
        </div>
        <p className='not'>
            {cart.quantity}
        </p>
        </a>
        </div>
    )

}

export default CarWidget;
/* 
style={ {fontSize: '45px', paddingTop: '20px', paddingRight: '15px', color: '#b82f2e', margin: '0'}} */