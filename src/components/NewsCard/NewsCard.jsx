import { Card } from "react-bootstrap";

const NewCard = ({ news }) => {
  const { platformName, title, image, date } = news;
  return (
    <>
      <Card className="d-flex flex-row align-items-center mb-3 shadow-sm">
        <Card.Body>
          <Card.Text>Plataforma: {platformName}</Card.Text>
          <Card.Text>Titulo: {title} </Card.Text>
          <Card.Text>Fecha: {date} </Card.Text>
        </Card.Body>
        <Card.Img src={image} alt={title} style={{ width: "25%" }} />
      </Card>
    </>
  );
};

export default NewCard;
