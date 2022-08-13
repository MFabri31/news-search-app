import { Container, Navbar, Nav } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" className="text-uppercase shadow">
      <Container>
        <Navbar.Brand href="#inicio">
          <img src={Logo} alt="logo" style={{ width: "2.5rem" }} />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#inicio">Inicio</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
