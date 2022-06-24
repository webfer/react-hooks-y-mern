import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
  //console.log("Render");
  // API .... FETCH ....
  // Al hacer un cambio en el estado se vuelve a renderizar todo el FC = Functional component

  const [counter, setCounter] = useState(value);
  const handleAdd = () => {
    //   console.log(event);
    //setCounter((c) => c + 1); // Otra fora de actualizar el state, cuando no se conoce el valor de referencia (counter)
    setCounter(counter + 1);
  };

  const handleDecrease = () => setCounter(counter - 1);

  const handleRset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={handleAdd}> +1</button>
      <button onClick={handleDecrease}> -1</button>
      <button aria-label="btn-reset" onClick={handleRset}>
        {' '}
        Reset
      </button>
    </>
  );
};

CounterApp.prototypes = {
  value: PropTypes.number.isRequired,
};
