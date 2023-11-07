import { Apartment } from "../../types/Apartment";

export const ApartmentSummary: React.FC<{ data: Apartment }> = ({ data }) => {
  return (
    <div className="mb-5 rounded-tr-lg rounded-bl-lg overflow-hidden">
      <div className="relative">
        <img
          src={data.imageUrl}
          alt="apartment picture"
          className="max-w-xs border-tl-lg"
        />
        <div className="absolute bottom-2 left-2 px-3 dark:bg-black/80 bg-white/80 uppercase font-light tracking-wider rounded-tr-lg rounded-bl-lg overflow-hidden font-custom-title">
          {data.name}
        </div>
      </div>
      <div className="py-1 px-3 bg-sky-100 dark:bg-sky-900 flex place-content-between">
        <p>
          Bedrooms: <span className="italic">{data.bedrooms}</span>
        </p>
        <p>
          Bathrooms: <span className="italic">{data.bathrooms}</span>
        </p>
      </div>
      <div className="py-1 px-3 bg-sky-100 dark:bg-sky-900 flex place-content-between">
        <p>
          <span className="font-light italic">{data.price}</span> €/month
        </p>
        <p>
          Available{" "}
          <span className="font-light italic">{data.availability}</span>
        </p>
      </div>
    </div>
  );
};
