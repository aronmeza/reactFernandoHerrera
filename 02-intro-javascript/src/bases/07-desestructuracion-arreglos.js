// Desestructuracion de arreglos

 const personajes = ['Persona1', 'Persona2', 'Persona3'];

 const [,,p3] = personajes;

console.log(p3)


const retornaArreglo = ()=>{
 return ['ABC', 123];
}

const [val1,val2] = retornaArreglo();

console.log(val1, val2)

const useeState = (valor) =>{
 return [valor, ()=>{console.log('Hola Mundo')}];

}

const [nombre,setNombre] = useeState('Goku');

console.log(nombre);
setNombre();