import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {
  console.log('I recreated it again! :( ');

  return (
    <>
      <button className="btn btn-primary" onClick={() => increment(5)}>
        Increment
      </button>
    </>
  );
});
