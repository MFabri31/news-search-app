import { Row, Col } from "react-bootstrap";
import Search from "../../components/Search";

const HomePage = () => {
  return (
    <>
      <Row className="justify-content-center py-5">
        <Col md={5}>
          <Search />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
