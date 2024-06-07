import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="navbar navbar-dark bg-dark" style={{ width: '100vw' }}>
          <Container fluid>
            <Navbar.Brand href="#"><img src="/images/brandandname.png" alt="" style={{ width: '10rem'}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                navbarScroll
              >
                <Nav.Link ><Link to='/' style={{color: 'grey', margin: 'auto'}}>Home</Link></Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavBar;
// Se usa etiquetas Link (que nos facilita React ROuter) por que a diferencia de las etiquetas a estas no hacen que se recargue el dom de nuevo, y mantiene nuestra
// navegabilidad

        
        