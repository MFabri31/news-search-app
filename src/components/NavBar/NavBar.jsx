import { Container, Navbar, Nav } from "react-bootstrap";
import Logo from "../../assets/images/Logo.png";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="text-uppercase">
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
