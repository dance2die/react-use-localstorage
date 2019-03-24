"use strict";

import { renderHook, cleanup, act } from "react-hooks-testing-library";
import useStorage from "../src/index";

describe("react-use-storage", () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  afterEach(cleanup);

  test("should save to localStorage", () => {
    const [KEY, VALUE] = ["foo", "bar"];
    const { result } = renderHook(() => useStorage(KEY, VALUE));
    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      KEY,
      JSON.stringify("bar")
    );
    expect(localStorage.__STORE__[KEY]).toBe(JSON.stringify("bar"));
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);

    // act(() => result.current[0].setItem(KEY, VALUE));
  });

  // it("Happy Path", () => {});
});
