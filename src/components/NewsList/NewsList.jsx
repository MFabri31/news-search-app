import { Col } from "react-bootstrap";
import NewCard from "../NewsCard/NewsCard";
import { useNewsContext } from "../../hooks/useNewsContext";

const NewsList = () => {
  const { news, totalResults } = useNewsContext();

  const newList = news?.map((news, index) => (
    <Col md={8}>
      <NewCard news={news} key={index} />
    </Col>
  ));

  return (
    <>
      <Col md={8}>
        {news?.length > 0 && (
          <p className="lead ms-3">
            Está viendo {news.length} noticias de {totalResults} resultados
          </p>
        )}
      </Col>
      {newList}
    </>
  );
};

export default NewsList;
