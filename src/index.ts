import React from "react";

export default function useLocalStorage(key: string, initialValue: string = "") {
  const [item, setValue] = React.useState(() => {
    localStorage.getItem(key) || localStorage.setItem(key, initialValue); 
    return initialValue;
  });

  const setItem = (item: string) => {
    setValue(item);
    window.localStorage.setItem(key, item);
  };

  return [item, setItem];
}
