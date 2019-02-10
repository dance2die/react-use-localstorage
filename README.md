# react-use-localstorage

_depends on stable v16.8.0~_

![version](https://img.shields.io/npm/v/react-use-localstorage.svg?style=flat-square)
![size](https://img.shields.io/bundlephobia/min/react-use-localstorage.svg?style=flat-square)
![minzippedsize](https://img.shields.io/bundlephobia/minzip/react-use-localstorage.svg?style=flat-square)

Access [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) using [React hooks](https://reactjs.org/docs/hooks-intro.html).

Fork it on CodeSandbox  
[![Edit usestate-useeffect](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/09xj95vxl)


# How to use it

```javascript
import React from "react";
import ReactDOM from "react-dom";
import useLocalStorage from "react-use-localstorage";

import "./styles.css";

function App() {
  const [item, setItem] = useLocalStorage("name", "Initial Value");

  return (
    <div className="App">
      <h1>Set Name to store in Local Storage</h1>
      <div>
        <label>
          Name:{" "}
          <input
            type="text"
            placeholder="Enter your name"
            value={item}
            onChange={e => setItem(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

# Demo

![demo](react-use-localstorage.gif)

# Change Log

2.1.0
- Can optionally pass an initial value
- This is to prevent form field from being uncontrolled.

2.0.0
- Breaking change - `setItem` doesn't require `key`

1.1.1
- Updated to React v16.8.1, which contains the patched Hooks

1.1.0
- Updated dev dependency version

1.0.0  
- Updated to React v16.8.0, which contains the stable Hooks

0.0.6
- Changed the language from JavaScript to TypeScript
- It has minimized the distribution file greatly