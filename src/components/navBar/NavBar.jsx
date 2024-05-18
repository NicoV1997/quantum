import CarWidget from './CarWidget/CarWidget';
import Menu from './Menu/Menu'
import './NavBar.css';

const NavBar = () => {

    return (
    <>
        <div className='NavBar'>
        <img src="/images/brandandname.png" alt="" className='brandandname'/>
        <img src="/images/brand.png" alt="" className='brand'/>
        <div className='categorys'>
            <a href=""><ul>Home</ul></a>
            <a href=""><ul>Ofertas</ul></a>
            <a href=""><ul>Catalogo</ul></a>
        </div>
        <CarWidget className='CarWidget'/>
        <Menu className='menu' />
        </div>
        
    </>
    )
}

export default NavBar;