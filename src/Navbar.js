import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import LOGO from './LOGO2.svg'

function NavBar() {
  return (
    <Navbar style={{fontSize: '1.5rem'}} collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand><img style={{ width: '2em' }} src={LOGO} alt='prestondoris.com logo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar