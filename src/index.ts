import { Dispatch, useCallback, useEffect, useState } from 'react';
import { isEqual } from 'lodash';

function parseValue(value: string | null) {
  if (value) {
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }
  return null;
}

function getValueFromLocalStorage(key: string) {
  return parseValue(window.localStorage.getItem(key));
}

type T = string | object;

export default function useLocalStorage(
  key: string,
  initialValue: T = ''
): [T, Dispatch<T>] {
  const [value, setValue] = useState<T>(
    () => getValueFromLocalStorage(key) || initialValue
  );

  const setItem = (newValue: T) => {
    setValue(newValue);
    window.localStorage.setItem(
      key,
      typeof newValue === 'object' ? JSON.stringify(newValue) : newValue
    );
  };

  useEffect(() => {
    const newValue = getValueFromLocalStorage(key);
    if (!isEqual(value, newValue)) {
      setValue(newValue || initialValue);
    }
  });

  const handleStorage = useCallback(
    (event: StorageEvent) => {
      const newValue = parseValue(event.newValue);
      if (event.key === key && !isEqual(newValue, value)) {
        setValue(newValue || initialValue);
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
