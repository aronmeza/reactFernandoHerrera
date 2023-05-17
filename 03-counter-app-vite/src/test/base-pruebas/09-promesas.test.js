import {getHeroeByIdAsync} from "../../base-pruebas/09-promesas.js";
import heroes from '../../data/heroes.js'

describe('Pruebas en 09-promesas', () => {
  test('getHeroByIdAsync debe de retornar un heroe', (done) => {
    const id = 1;
    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'});

        done();
      })
  });

  test('getHeroByIdAsync debe de retornar un error', (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .catch( error =>{
        console.log(error)
        expect(error).toBe( 'No se pudo encontrar el héroe')

        done();
      });

  });


});