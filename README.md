# react-use-localstorage
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors)

_depends on stable v16.8.1~_

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

# Changelog

<details>
<summary><b>Expand Changelog</b></summary>

2.4.1
- Added `useLocalStorage` return type explicitly to generate correct `index.d.ts` typing file.

2.4.0
- Added TypeScript typings as suggested by @TheAifam5 in Issue #9

2.3.0
- Fixed a bug where initial value is returned all the time #7 by @lilasquared 🙏

2.2.0
- Sets initial value in local storage

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
</details>

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/all-contributors/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/3036779?v=4" width="100px;" alt="Aaron Roberts"/><br /><sub><b>Aaron Roberts</b></sub>](https://github.com/lilasquared)<br />[🤔](#ideas-lilasquared "Ideas, Planning, & Feedback") [🐛](https://github.com/dance2die/react-use-localstorage/issues?q=author%3Alilasquared "Bug reports") [💻](https://github.com/dance2die/react-use-localstorage/commits?author=lilasquared "Code") | [<img src="https://avatars1.githubusercontent.com/u/8465237?v=4" width="100px;" alt="Sung Kim"/><br /><sub><b>Sung Kim</b></sub>](https://twitter.com/dance2die)<br />[💻](https://github.com/dance2die/react-use-localstorage/commits?author=dance2die "Code") [🐛](https://github.com/dance2die/react-use-localstorage/issues?q=author%3Adance2die "Bug reports") [📖](https://github.com/dance2die/react-use-localstorage/commits?author=dance2die "Documentation") | [<img src="https://avatars3.githubusercontent.com/u/2192274?v=4" width="100px;" alt="TheAifam5"/><br /><sub><b>TheAifam5</b></sub>](https://theaifam5.eu/)<br />[🤔](#ideas-TheAifam5 "Ideas, Planning, & Feedback") |
| :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!