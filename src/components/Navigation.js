import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';
const Navigation = () =>{
    return(
            <Navbar bg="none" expand="lg">
      <Container fluid>
        <Navbar.Brand className="my-3 mx-5 p-3">
        <img src={logo} height={80} className='d-inline-block align-top' alt='Anilox Design' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-5"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="mx-3" href="#action1">Sobre Nós</Nav.Link>
            <Nav.Link className="mx-3" href="#action2">Serviços</Nav.Link>
            <Nav.Link className="mx-3" href="#action3">Portfólio</Nav.Link>
        
            
      
          </Nav>
          <Button variant="outline-dark mx-5">Faça um Orçamento</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
        )
}

export default Navigation;
   
