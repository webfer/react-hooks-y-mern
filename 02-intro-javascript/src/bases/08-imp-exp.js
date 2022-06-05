// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';

// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

export const getHeroeById = (id) => heroes.find((el) => el.id === id);

// console.log(owners);

// console.log(getHeroeById(2));

export const getHeroesByOwner = (owner) =>
  heroes.filter((el) => el.owner === owner);

// console.log(getHeroesByOwner('DC'));
