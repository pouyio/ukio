import "./App.css";
import { useEffect, useState } from "react";
import { Apartment, cities } from "../types/Apartment";
import { ApartmentSummary } from "./components/ApartmentSummary";
import { AvailabilityNextMonth } from "./components/AvailavilityNextMonth";
import { CityFilter } from "./components/CityFilter";
import { Empty } from "./components/Empty";
import { Loading } from "./components/Loading";
import { NameFilter } from "./components/NameFilter";
import { Pagination } from "./components/Pagination";
import { Range } from "./components/Range";
import { useDebounce } from "./hooks/useDebounce";
import { useSearchParams } from "./hooks/useSearchParams";

function App() {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [total, setTotal] = useState(0);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const city = useDebounce<string>(searchParams.get("city") ?? cities[0]);
  const query = useDebounce<string>(searchParams.get("query") ?? "");
  const min = useDebounce<number>(+(searchParams.get("min") ?? 0));
  const max = useDebounce<number>(+(searchParams.get("max") ?? 500));
  const page = useDebounce<number>(+(searchParams.get("page") ?? 1));
  const available = useDebounce<number>(+(searchParams.get("available") ?? 0));

  useEffect(() => {
    setLoading(true);
    fetch(
      `http://localhost:3000/api/handler?${new URLSearchParams({
        city,
        query: encodeURIComponent(query),
        min: `${min}`,
        max: `${max}`,
        page: `${page}`,
        available: `${available}`,
      })}`
    )
      .then<{ data: Apartment[]; total: number }>((response) => response.json())
      .then((response) => {
        setApartments(response.data);
        setTotal(response.total);
        setLoading(false);
      });
  }, [city, query, min, max, available, page]);

  return (
    <>
      <h1 className="text-6xl mb-10">Apartments ⛅️</h1>
      <div className="mb-6 flex place-content-around flex-wrap items-center gap-y-5">
        <CityFilter />
        <AvailabilityNextMonth />
      </div>
      <div className="mb-6 flex place-content-around flex-wrap items-center gap-y-5">
        <NameFilter />
        <Range />
      </div>
      <div className="border-b border-sky-100 dark:border-sky-900 opacity-50 w-full my-5"></div>
      {loading ? (
        <Loading />
      ) : apartments.length ? (
        <section className="mb-8 mt-2">
          <p className="text-left mb-2">
            Showing {apartments.length} of {total} apartments
          </p>
          <ul className="flex flex-row flex-wrap sm:place-content-between place-content-center">
            {apartments.map((a) => (
              <li key={a.name}>
                <ApartmentSummary data={a} />
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <Empty />
      )}
      <Pagination totalItems={total} />
    </>
  );
}

export default App;
