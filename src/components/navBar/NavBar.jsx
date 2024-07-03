import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CarWidget from './CarWidget/CarWidget';
import { useCategories } from '../hooks/useCategories';

const NavBar = () => {

  const categories = useCategories();

    return (
      <Navbar expand="lg" className="navbar navbar-dark bg-dark" style={{ width: '100vw' }}>
      <Container fluid>
        <Nav.Link>
          <Link to='/'><img src="/images/brandandname.png" alt="" style={{ width: '10rem' }}/></Link>
        </Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link to='/'>
              <Link to='/' style={{color: 'grey', margin: 'auto', paddingLeft: '10px'}}>Home</Link>
            </Nav.Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              {categories.map((category) => (
                  <NavDropdown.Item key={category.id} as={Link} to={`/category/${category.slug}`} style={{ width: '100%', padding: 0 }}>
                  <span style={{ display: 'block', padding: '0.5rem 1rem', color: 'inherit', textDecoration: 'none' }}>
                    {category.name}
                  </span>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <CarWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
      );
}

export default NavBar;