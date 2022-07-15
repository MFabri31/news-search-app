import { useRef } from "react";
import { Form, Button } from "react-bootstrap";

const Search = () => {
  const inputRef = useRef();

  const handleChange = (e) => {
    console.log(inputRef.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          placeholder="Buscar noticia..."
          onChange={handleChange}
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
