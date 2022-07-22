import { useContext } from "react";
import { Col } from "react-bootstrap";
import NewCard from "../NewsCard/NewsCard";
import { NewsContext } from "../../context/newsContext";

const NewsList = () => {
  const { news } = useContext(NewsContext);

  const newList = news?.map((news, index) => (
    <Col md={8}>
      <NewCard news={news} key={index} />
    </Col>
  ));

  return (
    <>
      <Col md={8}>
        {news?.length > 0 && (
          <p className="lead ms-3">Total de rusultados: {news.length}</p>
        )}
      </Col>
      {newList}
    </>
  );
};

export default NewsList;
