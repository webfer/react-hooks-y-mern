import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ quote, author }) => {
  const pRef = useRef();
  const [boxZise, setBoxZise] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    // console.log(pRef.current.getBoundingClientRect());
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxZise({ width, height });
  }, []);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: 'flex' }}>
        <p ref={pRef} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer"> {author}</footer>
      </blockquote>
      <code>{JSON.stringify(boxZise)}</code>
    </>
  );
};
Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
