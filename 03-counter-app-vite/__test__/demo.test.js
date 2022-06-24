describe("Pruebas de test", () => {
  test("Should be not faild", () => {
    //1. Initialization
    const msg1 = "Hola mundo!";

    //2. estimulus
    const msg2 = msg1.trim();

    //3. To observer the expected behavior..
    expect(msg1).toBe(msg2);
  });
});
