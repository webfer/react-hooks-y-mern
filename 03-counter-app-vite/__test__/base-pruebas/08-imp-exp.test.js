import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';

describe('Testing on 08-imp-exp', () => {
  test('getHeroeById debe retornar un heroe por ID', () => {
    const id = 1;
    const hero = getHeroeById(id);
    // console.log(hero);
    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });
  test('getHeroeById debe retornar undefined si no existe', () => {
    const id = 100;
    const hero = getHeroeById(id);
    // console.log(hero);
    // expect(hero).toBe(undefined);
    expect(hero).toBeFalsy();
  });

  // getHeroesByOwner;
  test('getHeroesByOwner should return a hero by owner DC', () => {
    const owner = 'DC';
    const hero = getHeroesByOwner(owner);
    const heros = [
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' },
    ];
    expect(hero.length).toBe(3);
    expect(hero).toEqual(heros);
    // console.log(hero);

    // other way
    expect(heros).toEqual(heros.filter((heroe) => heroe.owner === owner));
  });

  test('getHeroesByOwner should return a hero by owner Marvel', () => {
    const owner = 'Marvel';
    const marvel = [
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' },
    ];
    const hero = getHeroesByOwner(owner);
    expect(hero.length).toBe(2);
    expect(hero).toEqual(marvel);
    // console.log(hero);
  });
});
