
//Promises

import {getHeroeById, getHeroesByOwner} from "08-import-export";

// const promesa = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         //console.log('2 segundos despues');
//         const heroe = getHeroeById(2)
//         resolve(heroe);
//
//         resolve();
//     }, 2000)
// });
//
// promesa.then((heroe) =>{
//     console.log('heroe ', heroe);
// }).catch(err=>console.warn(err));

const getHeroByIdAsync = (id) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            //console.log('2 segundos despues');
            const p1 = getHeroeById(id)
            if(p1)
                resolve(p1);
            reject('No se pudo encontrar el heroe');

        }, 2000)
    });
}

getHeroByIdAsync(3)
    .then(console.log)
    .catch( console.warn);

