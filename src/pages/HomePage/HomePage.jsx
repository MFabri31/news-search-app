import { Row, Col, Alert } from "react-bootstrap";
import Search from "../../components/Search";
import NewsList from "../../components/NewsList/NewsList";
import Loading from "../../components/Loading";
import MyPagination from "../../components/Pagination";
import { useNewsContext } from "../../hooks/useNewsContext";
import Hero from "../../components/Hero/Hero";

const HomePage = () => {
  const { news, loading } = useNewsContext();

  return (
    <>
      <Row className="justify-content-center mb-5">
        <Hero>
          <Search />
        </Hero>
      </Row>
      <main>
        <Row className="justify-content-center">
          {loading && <Loading />}
          <NewsList />
          {news?.length > 0 && <MyPagination />}
          {news?.length === 0 && (
            <Alert variant="warning" className="w-50 text-center fs-2">
              Sin resultados!
            </Alert>
          )}
        </Row>
      </main>
    </>
  );
};

export default HomePage;
