import {getHeroeById, getHeroesByOwner} from "../../base-pruebas/08-imp-exp.js";

describe('Pruebas en 08-imp', () =>{
  test('getHeroById debe retornar un heroe por ID', () => {
    const testId=1;
    const heroe = getHeroeById(1);

    expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });



  })

  test('getHeroById debe retornar undefined si no existe heroe', () => {
    const testId=1;
    const heroe = getHeroeById(100);

    expect(heroe).toBeFalsy();



  })

  test('getHeroOwner debe retornar la lista de heroes de DC', () => {
    const testId=1;
    const heroe = getHeroesByOwner('DC');
    console.log(heroe)
    expect(heroe.length).toBe(3);
    expect(heroe).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ]);
    const heroeMarvel = getHeroesByOwner('Marvel');
    expect(heroeMarvel.length).toBe(2);



  })



});



