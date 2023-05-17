
// Funciones

//const saludar = function (nombre){
//    return `Hola, ${nombre}`
//}

const saludar2 = nombre => {
    return `Hola, ${nombre}`
}

const saludar3 = nombre =>  `Hola, ${nombre}`;
const saludar4 = () =>  `Hola Mundo`;


console.log(saludar2('Aarón'))
console.log(saludar3('Aarón'))
console.log(saludar4())

const getUser = () =>  
    ({
        uid: 'ABC123',
        username: 'user_123'
    });


const user = getUser();
console.log(user);

//function getUsuarioActivo(nombre){
//    return {
//      uid: 'WE123',
  //      username: 'QWEuser_123' 
 //   }
//};

const getUsuarioActivo = nombre => ({uid:'WE123',username: 'QWEuser_123' });

const usuarioActivo = getUsuarioActivo('Fernando');

console.log(usuarioActivo)