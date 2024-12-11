**Instructions to reproduce the eror**
---

#### Preparation

Set `node` environment to `20.11.0`, or use `nvm` to run `nvm use 20.11.0`

#### Steps

1. Clone the repo
2. Run `yarn install`
3. Run `yarn test`

#### Expected behavior

All tests should pass.

#### Actual behavior

```
ReferenceError: TextEncoder is not defined

> 1 | import { configure } from 'enzyme';
    | ^
  2 | import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
  3 |
  4 | const crypto = require('crypto');

  at Object.<anonymous> (node_modules/undici/lib/web/fetch/data-url.js:5:17)
  at Object.<anonymous> (node_modules/undici/lib/web/fetch/util.js:7:97)
  at Object.<anonymous> (node_modules/undici/lib/web/fetch/headers.js:11:5)
  at Object.<anonymous> (node_modules/undici/lib/web/fetch/response.js:3:90)
  at Object.<anonymous> (node_modules/undici/lib/web/fetch/index.js:11:5)
  at Object.<anonymous> (node_modules/undici/index.js:106:19)
  at Object.<anonymous> (node_modules/cheerio/src/index.ts:24:1)
  at Object.<anonymous> (node_modules/enzyme/src/Utils.js:9:1)
  at Object.<anonymous> (node_modules/enzyme/src/ReactWrapper.js:4:1)
  at Object.<anonymous> (node_modules/enzyme/src/index.js:1:1)
  at Object.<anonymous> (src/setupTests.js:1:1)
  at TestScheduler.scheduleTests (node_modules/@jest/core/build/TestScheduler.js:333:13)
  at runJest (node_modules/@jest/core/build/runJest.js:404:19)
```
