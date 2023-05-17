
// import export y funciones comunes de arreglos



import heroes, {owners}  from '../data/heroes';


export const getHeroeById = (id) => heroes.find( (hero) => hero.id === id);

//console.log(getHeroeById(2));


export const getHeroesByOwner = (owner) => heroes.filter((heroe)=> heroe.owner === owner);

//console.log(getHeroesByOwner('DC'))











