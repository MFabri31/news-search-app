import { Card, NavLink } from "react-bootstrap";

const NewCard = ({ news }) => {
  const { author, title, urlToImage, publishedAt, url } = news;

  const date = new Date(publishedAt);
  return (
    <>
      <NavLink href={url} target="_blank">
        <Card className="d-flex flex-row align-items-center mb-5 pb-5 border-0 border-bottom  text-dark">
          <Card.Body>
            <Card.Text className="fs-1 fw-bold ">{author}</Card.Text>
            <Card.Text className="fs-4">{title} </Card.Text>
            <Card.Text className="fs-5 fst-italic text-secondary">
              Publicado el:{" "}
              <span className="fw-semibold text-dark-emphasis">
                {" "}
                {date.toLocaleString()}
              </span>
            </Card.Text>
          </Card.Body>
          <Card.Img src={urlToImage} alt={title} style={{ width: "25%" }} />
        </Card>
      </NavLink>
    </>
  );
};

export default NewCard;
