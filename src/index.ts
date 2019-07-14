import { Dispatch, SetStateAction, useState, useEffect } from 'react';

export default function useLocalStorage<S>(
  key: string,
  initialState?: S | (() => S)
): [S, Dispatch<SetStateAction<S>>] {
  const item = localStorage.getItem(key);
  const init = (item === null ? initialState : JSON.parse(item)) as S;
  const [state, setState] = useState(init);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}
