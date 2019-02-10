import React from 'react';

export default function useLocalStorage(
  key: string,
  initialValue: string = ''
) {
  const [item, setValue] = React.useState(() => {
    const value = localStorage.getItem(key) || initialValue;
    localStorage.setItem(key, value);
    return value;
  });

  const setItem = (newValue: string) => {
    setValue(newValue);
    window.localStorage.setItem(key, newValue);
  };

  return [item, setItem];
}
