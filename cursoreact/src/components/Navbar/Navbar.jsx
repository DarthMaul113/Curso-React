import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import CartWidget from '../CartWidget/CartWidget';
import '../../css/Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import ItemCount from "../ItemCount/ItemCount"

function NavBar() {
  return (
    <>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/"><FontAwesomeIcon icon={faCat} className="text-dark" size="lg"></FontAwesomeIcon></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" >Inicio</Nav.Link>
              <Nav.Link href="#link" >Acerca de</Nav.Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="/categoria/poleras">Poleras</NavDropdown.Item>
                <NavDropdown.Item href="/categoria/zapatillas">Zapatillas</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/cart" >
                <CartWidget/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar