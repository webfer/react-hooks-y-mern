describe('Pruebas en el archivo demo.test.js', () => {
  test('Deben ser iguales los strings', () => {
    // 1. Inicializacion
    const msg = 'Hola mundo';

    // 2. Estimulo
    const msg2 = `Hola mundo`;

    // Observar el comportamiento
    expect(msg).toBe(msg2); // ===
  });
});
