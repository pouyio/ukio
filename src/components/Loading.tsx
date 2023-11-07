const Ghost = () => {
  return (
    <div className="mb-5 rounded-tr-lg rounded-bl-lg overflow-hidden">
      <div className="relative">
        <div className="max-w-xs border-tl-lg h-[179px] w-[320px] bg-gray-200 dark:bg-gray-500" />
        <div className="absolute bottom-2 left-2 px-3 dark:bg-black bg-white uppercase font-light tracking-wider rounded-tr-lg rounded-bl-lg overflow-hidden">
          <span className="blur-sm">Hikari 45</span>
        </div>
      </div>
      <div className="py-1 px-3 bg-sky-100 dark:bg-sky-900 flex place-content-between">
        <p>
          Bedrooms: <span className="font-medium blur-sm">4</span>
        </p>
        <p>
          Bathrooms: <span className="font-medium blur-sm">3</span>
        </p>
      </div>
      <div className="py-1 px-3 bg-sky-100 dark:bg-sky-900 flex place-content-between">
        <p>
          <span className="font-light italic blur-sm">111</span> €/month
        </p>
        <p>
          Available{" "}
          <span className="font-light italic blur-sm">09-11-2023</span>
        </p>
      </div>
    </div>
  );
};

export const Loading: React.FC = () => {
  return (
    <section className="mb-8 mt-2">
      <p className="bg-gray-200 dark:bg-gray-500 w-44 h-6 rounded-md animate-pulse mb-2"></p>
      <ul className="flex flex-row flex-wrap sm:place-content-between place-content-center animate-pulse">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <li key={i}>
              <Ghost />
            </li>
          ))}
      </ul>
    </section>
  );
};
