import { render, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";
import { PAGINATION, Pagination } from "./Pagination";

const TOTAL_ITEMS = 100;
const maxPage = Math.ceil(TOTAL_ITEMS / PAGINATION);

describe("Pagination", () => {
  it("Displays the correct number of pages", () => {
    const { getByText } = render(
      <Router>
        <Pagination totalItems={TOTAL_ITEMS} />
      </Router>
    );
    expect(getByText(`1 of ${maxPage}`)).toBeTruthy();
  });

  it("Changes the url correctly when clicked next page", () => {
    const { getByText } = render(
      <Router>
        <Pagination totalItems={TOTAL_ITEMS} />
      </Router>
    );

    const nextPageButton = getByText("➡️");
    fireEvent.click(nextPageButton);
    expect(getByText(`2 of ${maxPage}`)).toBeTruthy();
  });
  it("Changes the url correctly when clicked last page", () => {
    const { getByText } = render(
      <Router>
        <Pagination totalItems={TOTAL_ITEMS} />
      </Router>
    );

    const nextPageButton = getByText("⏩");
    fireEvent.click(nextPageButton);
    expect(getByText(`${maxPage} of ${maxPage}`)).toBeTruthy();
  });
});
