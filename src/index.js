import { useState } from "react";

export default function useLocalStorage(key) {
  const [item, setItemValue] = useState(() => window.localStorage.getItem(key));

  const setItem = (key, item) => {
    setItemValue(item);
    window.localStorage.setItem(key, item);
  };

  return [item, setItem];
}
