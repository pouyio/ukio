import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { CityFilter } from "./CityFilter";
import { cities } from "../../../types/Apartment";

describe("CityFilter", () => {
  it("Shows all the cities available", () => {
    cities;
    const { getByText } = render(
      <Router>
        <CityFilter />
      </Router>
    );
    cities.forEach((city) => {
      expect(getByText(city)).toBeTruthy();
    });
  });
});
