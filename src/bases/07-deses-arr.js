

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , primero] = personajes;

console.log(primero);

const retornaArreglo = () => {
    return  ['ABC', 123];
}

const [index1, segundo] = retornaArreglo();

console.log(index1, segundo);


// Tarea
const getState = (valor) => {
    return [valor, () => { console.log('Hola mundo')} ]

}

const [ nombre , setNombre ] = getState('Goku');
console.log(nombre);

setNombre();