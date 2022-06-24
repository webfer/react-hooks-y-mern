import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';
describe('Pruebas 05-funciones.js', () => {
  test('getUser debe retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };
    const user = getUser();

    expect(user).toEqual(userTest);
  });

  // getUsuarioActivo debe retornar un OBJ

  test('getUsuarioActivo shuold return an OBJ with paramt', () => {
    const name = 'Pepe';
    const userActiveTest = {
      uid: 'ABC567',
      username: name,
    };

    const userActivo = getUsuarioActivo(name);
    expect(userActivo).toEqual(userActiveTest);
  });
});
