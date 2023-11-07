import { useSearchParams } from "../../hooks/useSearchParams";

export const PAGINATION = 6;

export const Pagination: React.FC<{
  totalItems: number;
}> = ({ totalItems }) => {
  const [searchParams, setSearchParams] = useSearchParams({ page: "1" });
  const totalPages = Math.ceil(totalItems / PAGINATION);
  const page = +(searchParams.get("page") ?? 0);

  const onChangePage = (direction: -1 | 1) => {
    if (page + direction < 1) {
      return;
    }
    if (page + direction > totalPages) {
      return;
    }
    setSearchParams({ page: `${page + direction}` });
  };

  const onFirst = () => {
    setSearchParams({ page: "1" });
  };

  const onLast = () => {
    setSearchParams({ page: `${totalPages}` });
  };

  return (
    <div className="inline-flex items-center">
      <button
        title="previous page"
        className={"text-3xl mx-3" + (page === 1 ? " opacity-50" : "")}
        onClick={() => onFirst()}
      >
        ⏪
      </button>
      <button
        title="previous page"
        className={"text-3xl mx-3" + (page === 1 ? " opacity-50" : "")}
        onClick={() => onChangePage(-1)}
      >
        ⬅️
      </button>
      <p className="inline px-3">
        {page} of {totalPages}
      </p>
      <button
        title="next page"
        className={"text-3xl mx-3" + (page === totalPages ? " opacity-50" : "")}
        onClick={() => onChangePage(1)}
      >
        ➡️
      </button>
      <button
        title="previous page"
        className={"text-3xl mx-3" + (page === totalPages ? " opacity-50" : "")}
        onClick={() => onLast()}
      >
        ⏩
      </button>
    </div>
  );
};
