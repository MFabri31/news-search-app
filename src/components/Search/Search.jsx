import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useNewsContext } from "../../hooks/useNewsContext";

const Search = () => {
  const [form, setForm] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const { getTerm } = useNewsContext();

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
      <Form onSubmit={handleSubmit} className="w-50">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Política, economía, negocios, deportes..."
            className="py-3 fs-4 fw-semibold w-75"
            name="form"
            value={form}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="primary"
            className="text-uppercase fw-semibold px-4"
            disabled={buttonDisabled}
          >
            <i class="bi bi-search fs-3"></i>
          </Button>
        </InputGroup>
      </Form>
    </>
  );
};
export default Search;
