import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar
      bg="light"
      variant="light"
      className="text-uppercase shadow-lg position-fixed w-100 z-3"
    >
      <Container>
        <Navbar.Brand href="#inicio">
          <i class="bi bi-newspaper fs-1 text-secondary"></i>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className="text-dark text-decoration-none fs-5 fw-">
            Inicio
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
