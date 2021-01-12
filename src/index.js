import * as React from 'react';

export default function useWith(Component, props) {
  const renderRef = React.useRef();
  renderRef.current = (restProps) => <Component {...props} {...restProps} />

  return React.useRef(function Wrapper(restProps) {
    return renderRef.current(restProps);
  }).current;
}
