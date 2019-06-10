import { Dispatch } from 'react';
export default function useLocalStorage(
  key: string,
  initialValue?: string
): [string, Dispatch<string>];
