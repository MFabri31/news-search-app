import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderWithNewsContext from "../../tests/wrappedContexts";
import Loading from "../../components/Loading";

describe("HomePage", () => {
  test("Se debe renderizar un spinner de carga", async () => {
    render(renderWithNewsContext(<Loading />));
    const loading = screen.getByRole("status");
    expect(loading).toBeInTheDocument();
  });
});
