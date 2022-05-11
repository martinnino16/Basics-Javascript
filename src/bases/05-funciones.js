

const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola, ${nombre}`;


console.log(saludar2('Vegetta'));
console.log(saludar3('Goku'));
console.log(saludar('Nicolas'));

const getUser = () => {
    return  {
        uid: 'ABC123',
        username: 'El_papi1502'
    }
}

console.log(getUser);


const getUsuarioActivo = (nombre) => 
    ({
        uid: 'ABC567',
        username: nombre
    })


const usuarioActivo = getUsuarioActivo('Nicolas');
console.log(usuarioActivo);
