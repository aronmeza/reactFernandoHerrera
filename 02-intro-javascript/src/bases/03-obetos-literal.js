const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55512,
        lat: 14.261,
        lng: 15.358,
    }
};



//console.table( persona );


const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);