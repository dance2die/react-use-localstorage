import { renderHook, act } from '@testing-library/react-hooks';
import useLocalStorage from '../src/index';

describe('useLocalStorage', (): void => {
  const VALUE = {
    INITIAL: 'initial value',
    CHANGED: 'changed value',
    NONE: '',
  };

  describe('Setup', () => {
    it('Returns initial value', () => {
      const { result } = renderHook(() =>
        useLocalStorage('key', VALUE.INITIAL)
      );
      expect(result.current[0]).toMatch(VALUE.INITIAL);
    });

    it('When no initial value is passed, returns an empty string', () => {
      const { result } = renderHook(() => useLocalStorage('key'));
      expect(result.current[0]).toMatch(VALUE.NONE);
    });

    it('Returns setValue function', () => {
      const { result } = renderHook(() =>
        useLocalStorage('key', VALUE.INITIAL)
      );
      expect(typeof result.current[1]).toMatch('function');
    });
  });

  it('When `setValue()` is called, the returned `value` updates', () => {
    const { result } = renderHook(() => useLocalStorage('key', VALUE.INITIAL));

    act(() => {
      result.current[1](VALUE.CHANGED);
    });

    expect(result.current[0]).toMatch(VALUE.CHANGED);
  });
});
