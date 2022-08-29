import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components/HeroCard';
import { getHerosByName } from '../helpers/getHerosByName';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heros = getHerosByName(q);
  const boxSearch = q.length === 0;
  const boxError = q.length > 0 && heros.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching...</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              placeholder="Search a Hero"
              className="form-control"
              name="searchText"
              type="text"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {boxSearch ? (
            <div className="alert alert-primary animate__animated animate__fadeIn">
              Search a Hero
            </div>
          ) : (
            boxError && (
              <div className="alert alert-danger animate__animated animate__fadeIn">
                There isn't Hero with <b>{q}</b>
              </div>
            )
          )}

          {heros.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
