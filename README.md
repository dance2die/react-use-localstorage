# react-use-localstorage

Access [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) using [React hooks](https://reactjs.org/docs/hooks-intro.html).


# How to use it

```javascript
import React from "react";
import ReactDOM from "react-dom";
import useLocalStorage from "react-use-localstorage";

import "./styles.css";

function App() {
  const [item, setItem] = useLocalStorage("name");

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
            onChange={e => setItem("name", e.target.value)}
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
