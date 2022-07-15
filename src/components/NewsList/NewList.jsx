import { Col } from "react-bootstrap";
import NewCard from "../NewsCard/NewsCard";

const NewsList = ({ news }) => {
  const newList = news.map((news, index) => (
    <Col md={6}>
      <NewCard news={news} key={index} />
    </Col>
  ));

  return newList;
};

export default NewsList;
