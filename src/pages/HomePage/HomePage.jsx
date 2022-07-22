import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import Search from "../../components/Search";
import NewsList from "../../components/NewsList/NewList";
import { NewsContext } from "../../context/newsContext";

const HomePage = () => {
  const { loading } = useContext(NewsContext);

  return (
    <>
      <Row className="justify-content-center py-5">
        <Col md={5}>
          <Search />
        </Col>
      </Row>
      <main>
        <Row className="justify-content-center">
          {loading && <h3 className="text-center">Cargando...</h3>}
          <NewsList />
        </Row>
      </main>
    </>
  );
};

export default HomePage;
