import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './cartwidget.jsx'

function Navbar2() {
  return (
    <Navbar expand="lg" className="navbar-bg-color">
      <Container classname="divcontainer">
        <Navbar.Brand href="#home" className="titulo-brand">Gp-Computación</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Pcs Completas</Nav.Link>
            <NavDropdown title="Componentes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Teclados</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Monitores
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Discos Duros</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
  );
}

export default Navbar2;