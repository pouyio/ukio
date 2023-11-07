import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Apartment } from "../../../types/Apartment";
import { ApartmentSummary } from "./ApartmentSummary";

const MOCK_APARTMENT: Apartment = {
  availability: "20-10-2023",
  bathrooms: 2,
  bedrooms: 2,
  city: "barcelona",
  imageUrl: "mock.png",
  name: "apt 1",
  price: 250,
};

describe("ApartmentSummary", () => {
  it("Shows correct info of an apartment", () => {
    const { getByText } = render(<ApartmentSummary data={MOCK_APARTMENT} />);
    expect(getByText(MOCK_APARTMENT.name)).toBeTruthy();
    expect(getByText(MOCK_APARTMENT.availability)).toBeTruthy();
  });
});
