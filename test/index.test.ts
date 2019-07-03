import { renderHook, act } from '@testing-library/react-hooks';
import useLocalStorage from '../src/index';

describe('useLocalStorage', (): void => {
  const KEY = 'key';
  const VALUE = {
    INITIAL: 'initial value',
    CHANGED: 'changed value',
    NONE: '',
  };

  describe('Setup', () => {
    it('Returns initial value', () => {
      const { result } = renderHook(() => useLocalStorage(KEY, VALUE.INITIAL));
      expect(result.current[0]).toMatch(VALUE.INITIAL);
    });

    it('When no initial value is passed, returns an empty string', () => {
      const { result } = renderHook(() => useLocalStorage(KEY));
      expect(result.current[0]).toMatch(VALUE.NONE);
    });

    it('Returns setValue function', () => {
      const { result } = renderHook(() => useLocalStorage(KEY, VALUE.INITIAL));
      expect(typeof result.current[1]).toMatch('function');
    });
  });

  it('When `setValue()` is called, the `value` updates', () => {
    const { result } = renderHook(() => useLocalStorage(KEY, VALUE.INITIAL));

    act(() => {
      result.current[1](VALUE.CHANGED);
    });

    expect(result.current[0]).toMatch(VALUE.CHANGED);
  });

  it('When `value` changes, `localStorage` is updated', () => {
    const { result } = renderHook(() => useLocalStorage(KEY, VALUE.INITIAL));

    act(() => {
      result.current[1](VALUE.CHANGED);
    });

    expect(localStorage.getItem(KEY)).toBe(VALUE.CHANGED);
  });
});
