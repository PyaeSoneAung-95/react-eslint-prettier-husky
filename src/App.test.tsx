import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("button is disabled", () => {
    render(<App />);
    const button = screen.getByRole("button");
    const name = "psa";
    const fullname = `Pyae ${name}`;
    console.log(fullname);
    expect(button).toBeDisabled();
  });
});
