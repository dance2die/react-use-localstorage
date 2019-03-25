"use strict";

import { renderHook, cleanup, act } from "react-hooks-testing-library";
import useStorage from "../src/index";

const asStorageValue = (value: any) => JSON.stringify(value);

afterEach(cleanup);
beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});

describe("react-use-storage", () => {
  describe(`localStorage tests`, () => {
    test(`Initially, "useStorage" should save to localStorage`, () => {
      const [key, value] = ["foo", "bar"];
      const { result } = renderHook(() => useStorage(key, value));

      expect(localStorage.setItem).toHaveBeenLastCalledWith(
        key,
        asStorageValue(value)
      );
      expect(localStorage.__STORE__[key]).toBe(asStorageValue(value));
      expect(Object.keys(localStorage.__STORE__).length).toBe(1);
    });

    test(`setItem should overwrite existing value with new value`, () => {
      const key = "test key";
      const oldValue = { a: 1 };
      const newValue = { x: "x", y: "y" };

      const { result } = renderHook(() => useStorage(key, oldValue));
      expect(localStorage.setItem).toHaveBeenLastCalledWith(
        key,
        asStorageValue(oldValue)
      );

      act(() => result.current[1](newValue));
      expect(localStorage.__STORE__[key]).toBe(asStorageValue(newValue));
    });
  });
});
