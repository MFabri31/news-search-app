import { useContext } from "react";
import { Row, Col, Alert } from "react-bootstrap";
import Search from "../../components/Search";
import NewsList from "../../components/NewsList/NewsList";
import { NewsContext } from "../../context/newsContext";
import Loading from "../../components/Loading";
import MyPagination from "../../components/Pagination";

const HomePage = () => {
  const { news, loading } = useContext(NewsContext);

  return (
    <>
      <Row className="justify-content-center py-5">
        <Col md={5}>
          <Search />
        </Col>
      </Row>
      <main>
        <Row className="justify-content-center">
          {loading && <Loading />}
          <NewsList />
          {news?.length > 0 && <MyPagination />}
          {news?.length === 0 && (
            <Alert variant="warning" className="w-50 text-center">
              Sin resultados!
            </Alert>
          )}
        </Row>
      </main>
    </>
  );
};

export default HomePage;
