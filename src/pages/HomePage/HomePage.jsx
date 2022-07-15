import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Search from "../../components/Search";
import { newsMock } from "../../mocks/newsMock.js";
import NewsList from "../../components/NewsList/NewList";

const HomePage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews([newsMock]);
  }, []);

  return (
    <>
      <Row className="justify-content-center py-5">
        <Col md={5}>
          <Search />
        </Col>
      </Row>
      <main>
        <Row className="justify-content-center">
          <NewsList news={news} />
        </Row>
      </main>
    </>
  );
};

export default HomePage;
