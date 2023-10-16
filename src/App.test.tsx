import {
  render,
  screen,
} from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("button is disabled", () => {
    render(<App />);

    const button =
      screen.getByRole(
        "button",
        { name: "Click me" }
      );
    expect(
      button
    ).toBeEnabled();
  });
});
