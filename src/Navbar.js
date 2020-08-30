import React from 'react'
import { Navbar, Nav/*, NavDropdown*/, Container } from 'react-bootstrap'
import LOGO from './LOGO2.svg'

function NavBar() {
  let navLinkStyles = {
    textDecoration: 'none',
    color: 'black'
  }
  return (
    <Navbar style={{fontSize: '1.5rem', backgroundColor: 'white'}} collapseOnSelect expand="lg" bg="" variant="">
      <Container>
        <Navbar.Brand><img style={{ width: '2em' }} src={LOGO} alt='prestondoris.com logo'></img></Navbar.Brand>
        <Nav>
          <Nav.Item>Welcome</Nav.Item>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav >
            <Nav.Link styles={navLinkStyles} href="#about">About</Nav.Link>
            <Nav.Link styles={navLinkStyles} href="#projects">Projects</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar