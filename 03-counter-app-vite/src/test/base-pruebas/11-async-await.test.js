import {getImagen} from "../../base-pruebas/11-async-await.js";
import {string} from "prop-types";

describe('Pruebas en 11-async-await', () =>{

    test('Debe de retornar una url de imagen', async () =>{
        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string')

    });
});