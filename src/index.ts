import React, { Dispatch } from 'react';

export default function useLocalStorage(
  key: string,
  initialValue: string = ''
): [string, Dispatch<string>] {
  const [value, setValue] = React.useState(
    () => localStorage.getItem(key) || initialValue
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  const handleStorage = React.useCallback(
    (event: StorageEvent) => {
      if (event.key === key && event.newValue !== value) {
        setValue(event.newValue || initialValue);
      }
    },
    [value]
  );

  React.useEffect(() => {
    window.addEventListener('storage', handleStorage);

    return () => window.removeEventListener('storage', handleStorage);
  }, [handleStorage]);

  return [value, setValue];
}
