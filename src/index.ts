import { Dispatch, useState } from 'react';

export default function useLocalStorage(
  key: string,
  initialValue: string = ''
): [string, Dispatch<string>] {
  const [value, setValue] = useState(
    () => localStorage.getItem(key) || initialValue
  );

  const setItem = (newValue: string) => {
    setValue(newValue);
    window.localStorage.setItem(key, newValue);
  };

  return [value, setItem];
}
