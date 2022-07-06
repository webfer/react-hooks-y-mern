import { useEffect, useState } from 'react';

export const Mesagge = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // console.log('Messagge mounted');
    const onMouseMove = ({ x, y }) => {
      //Destructuring {x,y} of "Event"
      // const coords = { x, y }; // Const with destructuring
      setCoords({ x, y }); // You can pass the OBJ { x, y }, direct on the funtion insted of the const
      //   console.log(coords);
    };
    window.addEventListener('mousemove', onMouseMove); // onMouseMove pass by reference

    return () => {
      //   console.log('Messagge unmounted');
      window.removeEventListener('mousemove', onMouseMove); // onMouseMove pass by reference
    };
  }, []);

  return (
    <>
      <h3>The user already exist</h3>
      {JSON.stringify(coords)}
    </>
  );
};
