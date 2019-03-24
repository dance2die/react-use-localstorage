import React, { Dispatch } from "react";

export default function useStorage(
  key: string,
  initialValue: any,
  // Storage strategy
  storage: Storage = localStorage
): [any, Dispatch<any>] {
  const [item, setValue] = React.useState(() => {
    const value = storage.getItem(JSON.stringify(key)) || initialValue;
    storage.setItem(key, JSON.parse(value));
    return value;
  });

  const setItem = (newValue: any) => {
    setValue(newValue);
    storage.setItem(key, newValue);
  };

  return [item, setItem];
}
