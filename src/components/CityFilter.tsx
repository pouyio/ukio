import { cities } from "../../types/Apartment";
import { useSearchParams } from "../hooks/useSearchParams";

export const CityFilter: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({ city: cities[0] });

  return (
    <div className="inline-flex my-1 lg:my-0">
      {cities.map((city, i) => (
        <button
          key={city}
          onClick={() => {
            setSearchParams({ city });
          }}
          className={`px-3 py-1 text-lg capitalize border-t-2 border-b-2 border-sky-100 hover:border-sky-100 dark:border-sky-900 dark:hover:border-sky-900 ${
            i === 0
              ? "rounded-bl-lg border-l-2 border-sky-100 dark:border-sky-900"
              : ""
          } ${i === cities.length - 1 ? "rounded-tr-lg border-r-2" : ""} ${
            searchParams.get("city") === city
              ? "bg-sky-100 dark:bg-sky-900 dar:border-sky-900 border-sky-100"
              : "border-transparent"
          }`}
        >
          {city}
        </button>
      ))}
    </div>
  );
};
