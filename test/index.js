import {renderHook} from '@testing-library/react-hooks';
import useWith from '../src';

describe('useModel', function () {
  it('should return same component', function () {
    function Wrapped() {}
    const {result, rerender} = renderHook(() => {
      return useWith(Wrapped, {});
    });
    const Component = result.current;
    rerender();
    result.current.should.equal(Component);
  });
});
