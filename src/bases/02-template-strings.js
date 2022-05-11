

const nombre = 'Nicolas';
const apellido = 'Martin';

// const nombreCompleto =  nombre + ' ' + apellido;
const nombreCompleto =  `${nombre} ${apellido}`;
const saludo = ' Hola mundo '; 

console.log( nombreCompleto );

function getSaludo(nombre) {
    return 'Hola ' + nombre;
    
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);