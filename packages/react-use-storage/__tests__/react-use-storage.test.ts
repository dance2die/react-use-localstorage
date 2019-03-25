"use strict";

import { renderHook, cleanup, act } from "react-hooks-testing-library";
import useStorage from "../src/index";

afterEach(cleanup);

describe("react-use-storage", () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  describe(`localStorage tests`, () => {
    test(`Initially, "useStorage" should save to localStorage`, () => {
      const [KEY, VALUE] = ["foo", "bar"];
      const { result } = renderHook(() => useStorage(KEY, VALUE));

      expect(localStorage.setItem).toHaveBeenLastCalledWith(
        KEY,
        JSON.stringify(VALUE)
      );
      expect(localStorage.__STORE__[KEY]).toBe(JSON.stringify(VALUE));
      expect(Object.keys(localStorage.__STORE__).length).toBe(1);
    });

    test(`setItem should overwrite existing value with new value`, () => {
      const key = "test key";
      const oldValue = { a: 1 };
      const newValue = { x: "x", y: "y" };

      const { result } = renderHook(() => useStorage(key, oldValue));
      expect(localStorage.setItem).toHaveBeenLastCalledWith(
        key,
        JSON.stringify(oldValue)
      );

      act(() => result.current[1](newValue));
      expect(localStorage.__STORE__[key]).toBe(JSON.stringify(newValue));
    });
  });
});
