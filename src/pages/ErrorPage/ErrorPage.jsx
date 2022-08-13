import { Button, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={8} className="text-center mx-auto py-5">
            <h1 className="display-5">Página no encontrada!</h1>
            <NavLink to="/">Volver</NavLink>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ErrorPage;
