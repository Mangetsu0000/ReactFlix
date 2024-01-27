import { useEffect, useState } from "react";
export function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(() => {
    const storedValues = localStorage.getItem(key);
    return storedValues ? JSON.parse(storedValues) : [];
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
}
