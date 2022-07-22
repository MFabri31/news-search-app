import { useContext, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { NewsContext } from "../../context/newsContext";

const Search = () => {
  const inputRef = useRef();

  const { getTerm } = useContext(NewsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    getTerm(inputRef.current.value);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          placeholder="Buscar noticia..."
          className="py-2 mb-3 border-2 border-secondary shadow-none"
          ref={inputRef}
        />
        <Button
          type="submit"
          variant="dark"
          className="btn-sm px-3 py-2 text-uppercase shadow-none"
        >
          Buscar
        </Button>
      </Form>
    </>
  );
};
export default Search;
