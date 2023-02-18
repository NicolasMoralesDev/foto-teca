import Link from 'next/link';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navegacion = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Buscador de Imagenes</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link"  href="/">Home</Link>
            <Link className="nav-link" href="resultados">Listado</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navegacion