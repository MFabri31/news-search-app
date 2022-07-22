import { Card, NavLink } from "react-bootstrap";

const NewCard = ({ news }) => {
  const { author, title, urlToImage, publishedAt, url } = news;

  const date = new Date(publishedAt);
  return (
    <>
      <NavLink href={url} target="_blank">
        <Card className="d-flex flex-row align-items-center mb-3 shadow-sm text-secondary">
          <Card.Body>
            <Card.Text>{author}</Card.Text>
            <Card.Text>{title} </Card.Text>
            <Card.Text>Publicado el: {date.toLocaleString()}</Card.Text>
          </Card.Body>
          <Card.Img src={urlToImage} alt={title} style={{ width: "25%" }} />
        </Card>
      </NavLink>
    </>
  );
};

export default NewCard;
