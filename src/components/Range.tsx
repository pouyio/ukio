import * as Slider from "@radix-ui/react-slider";
import { useSearchParams } from "../hooks/useSearchParams";

export const Range: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const min = +(searchParams.get("min") ?? 0);
  const max = +(searchParams.get("max") ?? 500);

  return (
    <div className="flex w-full md:w-2/3">
      <p className="pr-4 shrink-0">Min: {min}</p>
      <Slider.Root
        className="relative flex items-center select-none w-full"
        defaultValue={[min, max]}
        max={500}
        step={1}
        onValueChange={([minValue, maxValue]) =>
          setSearchParams({ min: `${minValue}`, max: `${maxValue}` })
        }
      >
        <Slider.Track className="bg-sky-200 dark:bg-sky-900 relative grow rounded-full h-1">
          <Slider.Range className="absolute bg-sky-200 dark:bg-sky-900 rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb className="block w-5 h-5 bg-sky-200 dark:bg-sky-900 rounded-full outline-none" />
        <Slider.Thumb className="block w-5 h-5 bg-sky-200 dark:bg-sky-900 rounded-full outline-none" />
      </Slider.Root>
      <p className="pl-4 shrink-0 aboslute">Max: {max}</p>
    </div>
  );
};
