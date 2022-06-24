import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Testing on 05-funciones file", () => {
  test("getUser debe retornar un objeto ", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();
    // expect(testUser).toStrictEqual(user); // Uesd toStrictEqual
    expect(testUser).toEqual(user);
  });

  test("getUsuarioActivo debe retornar un OBJ, pasando nombre por parametro", () => {
    const nombre = "Fernando";
    const testObj = {
      uid: "ABC567",
      username: nombre,
    };
    const user = getUsuarioActivo(nombre);
    expect(user).toEqual(testObj);
  });
});
