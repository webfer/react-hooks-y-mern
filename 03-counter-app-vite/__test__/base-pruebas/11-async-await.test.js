import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Testing on 11-async-await', () => {
  test('getImagen, debe retornar la URL de la imnagen', async () => {
    const url = await getImagen();
    // console.log(url);
    expect(typeof url).toBe('string');
  });

  // Testing ff there isno't
  //   test('getImagen, si no retorna un error si no tenemos apikey', async () => {
  //     const resp = await getImagen();
  //     console.log(resp);
  //     expect(resp).toBe('No se encontro la imagen Giphy');
  //   });
});
