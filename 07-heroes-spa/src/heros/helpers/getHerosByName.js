import { heros } from '../data/heros';

export const getHerosByName = (name = '') => {
  name = name.toLowerCase().trim();
  if (name.length === 0) return [];
  return heros.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
