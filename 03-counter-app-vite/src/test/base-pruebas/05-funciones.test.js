import {getUser, getUsuarioActivo} from "../../base-pruebas/05-funciones.js";

describe('Pruebas en 05-funciones', () => {
  test('getUser debe retornar Objeto', () => {
    const testUser =
      {
        uid: 'ABC123',
        username: 'El_Papi1502'
      };
    const user = getUser();

    expect(testUser).toStrictEqual(user);
  });

  test('getUserActivo debe retornar Objeto con un nombre', () => {
    const testNombre = "Aaron";
    const testUser =
      {
        uid: 'ABC567',
        username: testNombre
      };
    const user = getUsuarioActivo(testNombre);

    expect(testUser).toStrictEqual(user);
  });
});



