import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { describe, expect, it } from "vitest";

import App from "./App";

describe("App", () => {
  it("Renders without crashing showing not found message", () => {
    const { getByText } = render(
      <Router>
        <App />
      </Router>
    );
    expect(getByText("Apartments ⛅️")).toBeTruthy();
  });

  it("Shows 'Not found' message when there are no results", async () => {
    const { getByRole, findByText } = render(
      <Router>
        <App />
      </Router>
    );
    const inputElement = getByRole("textbox");

    fireEvent.change(inputElement, {
      target: { value: "xxxx" },
    });

    expect(await findByText("Nothing found 😢")).toBeTruthy();
  });
});
