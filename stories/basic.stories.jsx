import * as React from 'react';
import useWith from '../src';
import Hello from './components/Hello';

export function WithName() {
  const HelloWorld = useWith(Hello, {name: 'World'});
  const [count, update] = React.useReducer((c) => c + 1, 0);

  return (
    <div>
      <HelloWorld message="Happy!" />
      <button onClick={update}>
        update
        {count}
      </button>
    </div>
  );
}

export default {title: 'basic'};
