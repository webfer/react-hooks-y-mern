import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((value) => {
    // Pass value as an argument
    console.log('setCounter(counter + 1)');
    setCounter((c) => c + value); // We don't have counter, instead use the alternative way. Increment based in the argument VALUE
  }, []);

  // const incrementFather = () => { //  Use useCalbackHook instead this function
  //   setCounter(counter + 1);
  // };

  return (
    <>
      <h1>UseCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};
