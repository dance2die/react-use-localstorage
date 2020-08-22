# react-use-localstorage

[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors)

_depends on stable v16.8.1~_

![version](https://img.shields.io/npm/v/react-use-localstorage.svg?style=flat-square)
![size](https://img.shields.io/bundlephobia/min/react-use-localstorage.svg?style=flat-square)
![minzippedsize](https://img.shields.io/bundlephobia/minzip/react-use-localstorage.svg?style=flat-square)

Access [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) using [React hooks](https://reactjs.org/docs/hooks-intro.html).

Fork it on CodeSandbox  
[![Edit usestate-useeffect](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/09xj95vxl)

## How to use it

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import useLocalStorage from 'react-use-localstorage';

import './styles.css';

function App() {
  const [item, setItem] = useLocalStorage('name', 'Initial Value');

  return (
    <div className="App">
      <h1>Set Name to store in Local Storage</h1>
      <div>
        <label>
          Name:{' '}
          <input
            type="text"
            placeholder="Enter your name"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```

### Note for SSR (server-side rendering)

If you are using Gatsby or other SSR frameworks, such as Next.js, refer to [this workaround](https://github.com/dance2die/react-use-localstorage/issues/24#issuecomment-581479939) by @hencatsmith.

You need to make sure that `window` is available.

```js
const useSsrLocalStorage = (
  key: string,
  initial: string
): [string, React.Dispatch<string>] => {
  return typeof window === 'undefined'
    ? [initial, (value: string) => undefined]
    : useLocalStorage(key, initial);
};
```

## Demo

![demo](https://github.com/dance2die/react-use-localstorage/raw/master/react-use-localstorage.gif)

## Changelog

<details>
<summary><b>Expand Changelog</b></summary>

3.4.0

This version "Watch changes on storage and change state".  
Reference: https://github.com/dance2die/react-use-localstorage/pull/30

Thank you @VitorLuizC for the PR and @Svish for the review.

3.3.0

Reverted the implementation of `setValue` to set `localStorage` value directly, instead of depending on `useEffect`.  
Reference: window.localstorage updated after value managed by useLocalStorage #29

3.2.1

The library is covered by test.
Thank you so much, @SeanMcP~

3.0.0

Decided to go with @TheAifam5 the following breaking change as the type is derived from React type definition.

- Breadking change: `setIteme` type is changed from `(item: string) => void` () to `React.Dispatch<string>`
- Updated infrastructure by @TheAifam5 🙏 in [PR #13](https://github.com/dance2die/react-use-localstorage/pull/13)

  - Dropped babel in favor of `tsc` + `uglifyjs`
  - Replaced npm with yarn
  - Added husky for pre-commit git hooks
  - Source map has been dropped from distribution
  - distribution is moved from `dist` to `lib` folder

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
<table>
  <tr>
    <td align="center"><a href="https://github.com/lilasquared"><img src="https://avatars3.githubusercontent.com/u/3036779?v=4" width="100px;" alt="Aaron Roberts"/><br /><sub><b>Aaron Roberts</b></sub></a><br /><a href="#ideas-lilasquared" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/dance2die/react-use-localstorage/issues?q=author%3Alilasquared" title="Bug reports">🐛</a> <a href="https://github.com/dance2die/react-use-localstorage/commits?author=lilasquared" title="Code">💻</a></td>
    <td align="center"><a href="https://twitter.com/dance2die"><img src="https://avatars1.githubusercontent.com/u/8465237?v=4" width="100px;" alt="Sung Kim"/><br /><sub><b>Sung Kim</b></sub></a><br /><a href="https://github.com/dance2die/react-use-localstorage/commits?author=dance2die" title="Code">💻</a> <a href="https://github.com/dance2die/react-use-localstorage/issues?q=author%3Adance2die" title="Bug reports">🐛</a> <a href="https://github.com/dance2die/react-use-localstorage/commits?author=dance2die" title="Documentation">📖</a></td>
    <td align="center"><a href="https://theaifam5.eu/"><img src="https://avatars3.githubusercontent.com/u/2192274?v=4" width="100px;" alt="TheAifam5"/><br /><sub><b>TheAifam5</b></sub></a><br /><a href="#ideas-TheAifam5" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/dance2die/react-use-localstorage/commits?author=TheAifam5" title="Code">💻</a> <a href="#infra-TheAifam5" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="http://vitorluizc.github.io"><img src="https://avatars1.githubusercontent.com/u/9027363?v=4" width="100px;" alt="Vitor Luiz Cavalcanti"/><br /><sub><b>Vitor Luiz Cavalcanti</b></sub></a><br /><a href="https://github.com/dance2die/react-use-localstorage/commits?author=VitorLuizC" title="Code">💻</a></td>
    <td align="center"><a href="https://seanmcp.com"><img src="https://avatars1.githubusercontent.com/u/6360367?v=4" width="100px;" alt="Sean McPherson"/><br /><sub><b>Sean McPherson</b></sub></a><br /><a href="https://github.com/dance2die/react-use-localstorage/commits?author=SeanMcP" title="Tests">⚠️</a> <a href="https://github.com/dance2die/react-use-localstorage/commits?author=SeanMcP" title="Code">💻</a></td>
    <td align="center"><a href="https://www.geekality.net"><img src="https://avatars1.githubusercontent.com/u/142162?v=4" width="100px;" alt="Torleif Berger"/><br /><sub><b>Torleif Berger</b></sub></a><br /><a href="#review-Svish" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
