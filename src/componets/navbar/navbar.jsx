import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../cartwidget/cartwidget.jsx'
import { LinkContainer } from 'react-router-bootstrap';

function Navbar2() {
  return (
    <Navbar expand="lg" className="navbar-bg-color">
      <Container className="divcontainer">
        <Navbar.Brand href="/" className="titulo-brand">Gp-Computación</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Inicio</Nav.Link>
          </LinkContainer>
            <Nav.Link href="/Catalogo">Catalogo</Nav.Link>
            <NavDropdown title="Componentes" id="basic-nav-dropdown">
            <LinkContainer to="/teclados">
              <NavDropdown.Item >Teclados</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/monitores">
              <NavDropdown.Item >
                Monitores
              </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/ssd">
              <NavDropdown.Item >Discos Duros</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/graficas">
              <NavDropdown.Item >
                Placas de video
              </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
  );
}

export default Navbar2;