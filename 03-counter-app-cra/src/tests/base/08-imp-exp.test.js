import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';

import heroes from '../../data/heroes';

describe('Pruebas del fichero 09-imp-exp.js', () => {
  test('getHeroeById debe retornar u OBJ por el ID', () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);
    expect(heroe).toEqual(heroeData);
  });
  test('getHeroeById debe retornar undefined si Heroe no existe', () => {
    const id = 10; // No existe el ID 10 en DDBB
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test('getHeroesByOwner debe retornar los heroes filtrados by woner', () => {
    const owner = 'DC';
    const herosOwner = getHeroesByOwner(owner);
    const heroDataOwner = heroes.filter((h) => h.owner === owner);
    expect(heroDataOwner).toEqual(herosOwner);
  });

  test('getHeroesByOwner debe retornar un array vacio si no existe el woner', () => {
    const owner = 'DCX';
    const herosOwner = getHeroesByOwner(owner);
    expect(herosOwner).toEqual([]);
  });

  test('getHeroesByOwner debe retornar un array con owner Marvel', () => {
    const owner = 'Marvel';
    const heroDataOwner = heroes.filter((h) => h.owner === owner);
    expect(heroDataOwner.length).toBe(2);
  });
});
