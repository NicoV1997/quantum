import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../services/productsServices';
import CarWidget from './CarWidget/CarWidget';

const NavBar = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories()
    .then((res) => {
      return setCategories(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

    return (
        <Navbar expand="lg" className="navbar navbar-dark bg-dark" style={{ width: '100vw' }}>
          <Container fluid>
            <Nav.Link ><Link to='/'><img src="/images/brandandname.png" alt="" style={{ width: '10rem'}}/></Link></Nav.Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                navbarScroll
              >
                <Nav.Link ><Link to='/' style={{color: 'grey', margin: 'auto'}}>Home</Link></Nav.Link>
                <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                  {categories.map((category) => {
                    
                    if (category.slug === 'smartphones' || 
                      category.slug === 'tablets' || 
                      category.slug === 'mobile-accessories' || 
                      category.slug === 'laptops') {
                        return (
                          <NavDropdown.Item key={category.slug}>
                            <Link to={`/category/${category.slug}`}>{category.name}</Link>
                          </NavDropdown.Item>
                        )
                      }
                  })}
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <CarWidget />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavBar;
// Se usa etiquetas Link (que nos facilita React ROuter) por que a diferencia de las etiquetas a estas no hacen que se recargue el dom de nuevo, y mantiene nuestra
// navegabilidad

        
{/* <Form className="d-flex">
<FormControl
  type="search"
  placeholder="Search"
  className="me-2"
  aria-label="Search"
/>
<Button variant="outline-success">Search</Button>
</Form> */}