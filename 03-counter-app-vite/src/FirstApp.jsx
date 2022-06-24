import React from 'react';
import PropTypes from 'prop-types';

// const getSaludo = () => {
//   let saludo = {
//     name: "Fernando",
//     lastName: "Castro",
//   };
//   return saludo;
// };

export const FirstApp = ({
  title,
  name,
  subTitle,
  // subTitle = "Sub-titulo que pasa por defecto",
}) => {
  return (
    <>
      {/* <h1>Hello, {getSaludo().name + " " + getSaludo().lastName}</h1> */}
      <h1 data-testid="test-title">{title}</h1>
      <h2>Hello, {name}</h2>
      <h3>{subTitle}</h3>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  name: 'No hay nombre',
  subTitle: 'No hay subtitle',
  // title: "Este es el titulo",
};
