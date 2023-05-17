import {getSaludo} from "../../base-pruebas/02-template-string.js";

describe('Pruebas en 02-template-string ', () =>{
    test('getSaludo debe de retornar Hola+{nombre}', () =>{
        const nombre = "Aaron"
        expect(getSaludo(nombre)).toBe(`Hola ${nombre}`)
    });
});