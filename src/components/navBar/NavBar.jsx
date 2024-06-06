import CarWidget from './CarWidget/CarWidget';
import Menu from './Menu/Menu'
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
    <>
        <div className='NavBar'>
        <img src="/images/brandandname.png" alt="" className='brandandname'/>
        <img src="/images/brand.png" alt="" className='brand'/>
        <div className='categorys'>
            <Link to="/"><ul>Home</ul></Link> 
            <Link to=""><ul>Ofertas</ul></Link>
            <Link to=""><ul>Catalogo</ul></Link>
        </div>
        <CarWidget className='CarWidget'/>
        <Menu className='menu' />
        </div>
        
    </>
    )
}

export default NavBar;

// Se usa etiquetas Link (que nos facilita React ROuter) por que a diferencia de las etiquetas a estas no hacen que se recargue el dom de nuevo, y mantiene nuestra
// navegabilidad