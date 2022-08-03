import { useCounter, useFetch } from '../hooks';
import { Loading, Quote } from './';

export const MultipleCustomHook = () => {
  const { counter, increase, decrease } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0]; // Destructuring, in this case because of the API return an Array.
  //   This type of destructuring (!!data && data[0]) it would not be necessary if DATA return an Object. DOUBLE negation ===> !!data
  //   console.log({ data, isLoading, hasError });
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <Loading /> : <Quote author={author} quote={quote} />}

      {counter >= 2 ? (
        <button
          disabled={isLoading}
          onClick={counter > 1 ? () => decrease() : null}
          className="btn btn-primary"
        >
          Prev
        </button>
      ) : null}
      <button
        aria-label="btn-next"
        disabled={isLoading}
        onClick={() => increase()}
        className="btn btn-primary float-end"
      >
        Next
      </button>
    </>
  );
};
