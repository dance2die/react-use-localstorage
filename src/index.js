import { useState } from "react";

export default function useLocalStorage(key) {
  const [item, setValue] = useState(() => window.localStorage.getItem(key));

  const setItem = (key, item) => {
    setValue(item);
    window.localStorage.setItem(key, item);
  };

  return [item, setItem];
}
