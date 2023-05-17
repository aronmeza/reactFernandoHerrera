//Desestructuracuíon de Objetos
// Asignación Desestructurante

const persona={
    nombre:'Tony',
    edad:34,
    clave:'Ironman',
    rango: 'Soldado',
};

const { nombre:nombre2, edad, clave } = persona;

console.log(nombre2)
console.log(edad)
console.log(clave)

const userrContext = ({clave, nombre, edad, rango='Capitan',}) =>{
    //console.log(nombre, edad, rango)
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.1245,
            lng: -14.512,
        }
    }
    
}

const {nombreClave, anios, latlng:{lat, lng}} = userrContext(persona);

console.log(nombreClave, anios)
console.log(lat , lng)
