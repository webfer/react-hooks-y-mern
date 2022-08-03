import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Testing on useCounter', () => {
  test('should  return default values', () => {
    const { result } = renderHook(() => useCounter());
    // console.log(result);
    const { counter, decrease, increase, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrease).toEqual(expect.any(Function));
    expect(increase).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('should return value 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test('should increment the counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increase } = result.current;
    act(() => {
      increase();
      increase(2);
    });
    expect(result.current.counter).toBe(103);
  });

  test('should decrease the counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrease } = result.current;
    act(() => {
      decrease();
      decrease(2);
    });
    expect(result.current.counter).toBe(97);
  });

  test('should reset the counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrease, reset } = result.current;
    act(() => {
      decrease();
      reset();
    });
    expect(result.current.counter).toBe(100);
  });
});
