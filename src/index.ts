import React from "react";

export default function useLocalStorage(key: string) {
  const [item, setValue] = React.useState(() => window.localStorage.getItem(key));

  const setItem = (key: string, item: string) => {
    setValue(item);
    window.localStorage.setItem(key, item);
  };

  return [item, setItem];
}
