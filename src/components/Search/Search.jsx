import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { NewsContext } from "../../context/newsContext";

const Search = () => {
  const [form, setForm] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const { getTerm } = useContext(NewsContext);

  const handleChange = (e) => {
    if (e.target.value.length >= 3) setButtonDisabled(false);
    else setButtonDisabled(true);

    setForm(e.target.value);
  };

  const clearForm = () => {
    setForm("");
    setButtonDisabled(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getTerm(form);
    clearForm();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          placeholder="Buscar noticia..."
          className="py-2 mb-3 border-2 border-secondary shadow-none"
          name="form"
          value={form}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="dark"
          className="btn-sm px-3 py-2 text-uppercase shadow-none"
          disabled={buttonDisabled}
        >
          Buscar
        </Button>
      </Form>
    </>
  );
};
export default Search;
