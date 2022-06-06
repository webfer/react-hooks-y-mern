import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 5 }) => {
  const [counter, setCounter] = useState(value);

  // handleAdd
  const handleAdd = () => {
    setCounter(counter + 1); // This way is valid too
    // setCounter((c) => c + 1); // This way is valid too
  };

  const handleReduce = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleReduce}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
