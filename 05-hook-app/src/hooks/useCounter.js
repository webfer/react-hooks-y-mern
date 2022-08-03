import { useState } from 'react';

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increase = (value = 1) => {
    counter < 5000 ? setCounter((current) => current + value) : null;
  };
  const decrease = (value = 1) => {
    counter > 0 ? setCounter((current) => current - value) : null;
  };
  const reset = () => {
    setCounter(initialValue);
  };
  return {
    counter,
    increase,
    decrease,
    reset,
  };
};
