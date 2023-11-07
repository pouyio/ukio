export const cities = ["madrid", "barcelona", "lisbon"] as const;

export type City = (typeof cities)[number];

export type Apartment = {
  name: string;
  availability: string; //(next check in available date, format "dd-mm-yyyy")
  city: "madrid" | "barcelona" | "lisbon";
  price: number;
  bedrooms: number;
  bathrooms: number;
  imageUrl: string;
};
