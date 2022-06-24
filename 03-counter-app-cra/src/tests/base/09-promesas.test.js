import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas en 09-prom-async', () => {
  test('getHeroeByIdAsync debe retornar un Heroe Asyc', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test('Debe retornar un error si el Heroe por ID no existe', (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((error) => {
      console.log(error);
      // eslint-disable-next-line jest/no-conditional-expect
      expect(error).toBe('No se pudo encontrar el héroe');
      done();
    });
  });
});
