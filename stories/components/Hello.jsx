import * as React from 'react';

export default function Hello({name, message}) {
  return (
    <section>
      <h1>Hello {name}</h1>
      <p>{message}</p>
      <input type="text" />
    </section>
  );
}
