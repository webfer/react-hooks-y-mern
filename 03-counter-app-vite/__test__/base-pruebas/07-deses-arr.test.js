import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('Testing on 07-deses-arr', () => {
  test('Debe devolver un array', () => {
    const retorno = retornaArreglo();
    const [characters, numbers] = retornaArreglo();
    //expect(characters).toBe('ABC'); ====> // Valid if always return the same string
    //expect(numbers).toBe(123); ====> // Valid if always return the same number
    // console.log(typeof characters);
    expect(typeof characters).toBe('string');
    expect(typeof numbers).toBe('number');

    // console.log(expect.any(String));
    expect(characters).toEqual(expect.any(String));
    expect(numbers).toEqual(expect.any(Number));
  });
});
