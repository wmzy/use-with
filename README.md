[![Build Status](https://travis-ci.org/wmzy/use-with.svg?branch=master)](https://travis-ci.org/wmzy/use-with)
[![Coverage Status](https://coveralls.io/repos/github/wmzy/use-with/badge.svg?branch=master)](https://coveralls.io/github/wmzy/use-with?branch=master)
[![install size](https://packagephobia.now.sh/badge?p=use-with)](https://packagephobia.now.sh/result?p=use-with)
# use-with

> React Hooks + HOC.

## Install

```bash
npm install use-with
```

## Usage

```jsx
import * as React from 'react';
import useWith from 'use-with';
import Hello from './Hello';

export default function Demo({className}) {
  const HelloWorld = useWith(Hello, {className, message: 'World'});

  return <>
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
    <HelloWorld className="last" />
  </>;
}
```

## Workflow

```bash
# develop
npm start

# build
npm run build

# test
npm test

# commit changes
npm run commit

# publish
npm publish
```
