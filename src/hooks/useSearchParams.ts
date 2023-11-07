import { useCallback } from "react";
import {
  URLSearchParamsInit,
  useSearchParams as useReactSearchParams,
} from "react-router-dom";
import { URLSearchParams } from "url";

export const useSearchParams = (
  param?: URLSearchParamsInit
): [
  URLSearchParams,
  (
    nextInit: Record<string, string>,
    navigateOptions?:
      | {
          replace?: boolean | undefined;
          state?: Record<string, string>;
        }
      | undefined
  ) => void
] => {
  const [searchParams, setLocalSearchParams] = useReactSearchParams(param);

  const setValue = useCallback(
    (
      newValue: Record<string, string>,
      options?: {
        replace?: boolean | undefined;
        state?: Record<string, string>;
      }
    ) => {
      const oldParams: Record<string, string> = {};
      searchParams.forEach((value: string, key: string) => {
        oldParams[key] = value;
      });
      setLocalSearchParams(
        { ...oldParams, ...newValue },
        options ?? { replace: true }
      );
    },
    [searchParams, setLocalSearchParams]
  );

  return [searchParams, setValue];
};
