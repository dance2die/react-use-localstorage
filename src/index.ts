import React, { Dispatch } from 'react';

export default function useLocalStorage(
  key: string,
  initialValue: string = ''
): [string, Dispatch<string>] {
  const [value, setValue] = React.useState(
    () => window.localStorage.getItem(key) || initialValue
  );

  React.useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
}
