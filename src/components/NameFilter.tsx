import { useSearchParams } from "../hooks/useSearchParams";

export const NameFilter: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({ query: "" });
  const query = searchParams.get("query") ?? "";
  return (
    <div className="relative w-full md:w-1/3 pr-10">
      <input
        className="bg-gray-200 rounded-bl-lg rounded-tr-lg w-full p-2 dark:bg-gray-700 dark:border-gray-600 focus:outline-none"
        placeholder="Filter by name"
        role="textbox"
        type="text"
        value={query}
        onChange={(e) => setSearchParams({ query: e.target.value })}
      />
      <button
        className="absolute inset-y-0 right-16"
        onClick={() => setSearchParams({ query: "" })}
      >
        {query.length ? "❌" : "✏️"}
      </button>
    </div>
  );
};
