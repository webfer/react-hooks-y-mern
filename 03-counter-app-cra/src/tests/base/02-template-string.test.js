import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
  test('getSaludo method debe retorna un string', () => {
    const name = 'Fernando';
    const greet = getSaludo(name);

    console.log(greet);

    expect(greet).toBe(`Hola ${name}!`);
  });

  // getSaludo debe retornar  Hola Carlos! si no hay argumento nome.
  test('getSaludo method debe retornar un string con el argumento by default', () => {
    const greet = getSaludo();
    expect(greet).toBe('Hola Carlos!');
  });
});
