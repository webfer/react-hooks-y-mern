import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Testing on 09-promesas - promises', () => {
  // testing with DONE
  test('getHeroeByIdAsync debe retornar un heroe ', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC',
      });
      done();
    });
  });

  // Testing the exception

  test('getHeroeByIdAsync debe retornar un error si Heroe no existe ', (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch((error) => {
        expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
        done();
      });
  });
});
