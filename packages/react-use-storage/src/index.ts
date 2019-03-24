import React, { Dispatch } from "react";

export default function useStorage(
  key: string,
  initialValue: any,
  // Storage strategy
  storage: Storage = localStorage
): [any, Dispatch<any>] {
  const [item, setValue] = React.useState(() => {
    const value = storage.getItem(key) || initialValue;
    storeItem(value);
    return value;
  });

  const setItem = (value: any) => {
    setValue(value);
    storeItem(value);
  };

  function storeItem(value: any) {
    storage.setItem(key, JSON.stringify(value));
  }

  return [item, setItem];
}
