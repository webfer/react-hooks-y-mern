import { useState } from 'react';
import { useCounter } from '../hooks';
import { Small } from './Small';

export const Memorize = () => {
  const { counter, increase } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>
        {' '}
        Counter: <Small value={counter} />
      </h1>
      <hr />
      <button onClick={() => increase()} className="btn btn-primary mt-3">
        +1
      </button>
      <button
        onClick={() => setShow(!show)}
        className="btn btn-outline-primary"
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
