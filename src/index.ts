import { Dispatch, useCallback, useEffect, useState } from 'react';

function getValueFromLocalStorage(key: string) {
  const value = window.localStorage.getItem(key);
  return value ? (value.startsWith('{') ? JSON.parse(value) : value) : null;
}

export default function useLocalStorage(
  key: string,
  initialValue: string | object = ''
): [string | object, Dispatch<string | object>] {
  const [value, setValue] = useState<string | object>(
    () => getValueFromLocalStorage(key) || initialValue
  );

  const setItem = (newValue: string | object) => {
    setValue(newValue);
    window.localStorage.setItem(
      key,
      typeof newValue === 'string' ? newValue : JSON.stringify(newValue)
    );
  };

  useEffect(() => {
    const newValue = getValueFromLocalStorage(key);
    if (value !== newValue) {
      setValue(newValue || initialValue);
    }
  });

  const handleStorage = useCallback(
    (event: StorageEvent) => {
      if (event.key === key && event.newValue !== value) {
        setValue(event.newValue || initialValue);
      }
    },
    [value]
  );

  useEffect(() => {
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [handleStorage]);

  return [value, setItem];
}
