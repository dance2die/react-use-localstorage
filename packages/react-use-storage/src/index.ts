import React, { Dispatch } from "react";

export default function useStorage(
  key: string,
  initialValue: any = undefined,
  // Storage strategy
  storage: Storage = localStorage
): [any, Dispatch<any>] {
  const [item, setValue] = React.useState(() => {
    const value = initialValue || storage.getItem(key);
    storeItem(value);
    return value;
  });

  function storeItem(value: any) {
    storage.setItem(key, JSON.stringify(value));
  }

  function setItem(value: any) {
    setValue(value);
    storeItem(value);
  }

  return [item, setItem];
}
