# react-native-mock-render

A fork of [react-native-mock-render](https://github.com/Root-App/react-native-mock-render)

## Installation

```bash
npm install react-native-mock-render-fork --save-dev
```

```js
/* file-that-runs-before-all-of-my-tests.js */

// This will mutate `react-native`'s require cache with `react-native-mock`'s.
require('react-native-mock-render/mock'); // <-- side-effects!!!
```

## Why?

We wanted to be able deeply render React Native components in our integration tests and already used `react-native-mock`.
