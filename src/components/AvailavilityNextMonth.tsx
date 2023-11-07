import { useSearchParams } from "../hooks/useSearchParams";

export const AvailabilityNextMonth = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    available: "false",
  });
  const available = !!+(searchParams.get("available") ?? "0");

  return (
    <>
      <button
        onClick={() =>
          setSearchParams({
            available: available ? "0" : "1",
          })
        }
        className={`px-3 rounded-bl-lg rounded-tr-lg border-2 border-sky-100 dark:border-sky-900 ${
          available ? "bg-sky-100 dark:bg-sky-900" : ""
        }`}
      >
        <p className="ml-2 py-1">📆 Available next month</p>
      </button>
    </>
  );
};
