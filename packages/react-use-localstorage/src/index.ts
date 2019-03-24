import React, { Dispatch } from 'react';

export default function useLocalStorage(
  key: string,
  initialValue: string = ''
): [string, Dispatch<string>] {
  const [item, setValue] = React.useState(() => {
    const value = localStorage.getItem(key) || initialValue;
    localStorage.setItem(key, value);
    return value;
  });

  const setItem = (newValue: string) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return [item, setItem];
}
