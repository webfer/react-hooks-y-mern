import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1> Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        className="form-control"
        type="text"
        placeholder="Insert your name"
      />
      <button onClick={onClick} className="btn btn-primary mt-3">
        Set focus
      </button>
    </>
  );
};
