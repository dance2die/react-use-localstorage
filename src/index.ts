import { Dispatch, useCallback, useEffect, useState } from 'react';

export default function useLocalStorage(
  key: string,
  initialValue: string = ''
): [string, Dispatch<string>] {
  const [value, setValue] = useState(
    () => window.localStorage.getItem(key) || initialValue
  );

  const setItem = (newValue: string) => {
    const se = new StorageEvent('storage', {
      bubbles: false,
      cancelable: false,
      key,
      newValue,
      oldValue: value,
      storageArea: window.localStorage,
      url: location.href,
    });
    window.dispatchEvent(se);

    setValue(newValue);
    window.localStorage.setItem(key, newValue);
  };

  // useEffect(() => {
  //   const newValue = window.localStorage.getItem(key);
  //   if (value !== newValue) {
  //     setValue(newValue || initialValue);
  //   }
  // });

  const handleStorage = useCallback(
    (event: StorageEvent) => {
      if (
        event.storageArea === window.localStorage &&
        event.key === key &&
        event.newValue !== value
      ) {
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
