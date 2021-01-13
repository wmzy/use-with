import * as React from 'react';

export function useFC(render) {
  const renderRef = React.useRef();
  renderRef.current = render;

  return React.useRef(function RenderFunctionWrapper(restProps) {
    return renderRef.current(restProps);
  }).current;
}

export default function useWith(Wrapped, props) {
  return useFC((restProps) => <Wrapped {...props} {...restProps} />);
}
