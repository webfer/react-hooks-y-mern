// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ greet, subtitle }) => {
  // const greet2 = {
  //   name: 'Fernando',
  //   age: 34,
  // };

  return (
    <>
      <h1>{greet}</h1>
      {/* <pre>{JSON.stringify(greet2, null, 3)}</pre> */}
      <p>{subtitle}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  greet: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  subtitle: 'Subtitle aplication by default',
};
export default PrimeraApp;
