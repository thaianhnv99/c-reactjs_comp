import { useEffect, useState } from "react";

export const useDebounce = (value: any, debounceTime: number) => {
  const [valueDebounce, setValueDebounce] = useState();

  useEffect(() => {
    const time = setTimeout(() => {
      setValueDebounce(value);
    }, debounceTime);

    return () => clearTimeout(time);
  }, [debounceTime, value]);

  return valueDebounce;
};
