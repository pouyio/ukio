import { useState, useEffect } from "react";

export const useDebounce = <T extends string | number>(value: T) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), 500);
    return () => clearTimeout(handler);
  }, [value]);

  return debouncedValue;
};
