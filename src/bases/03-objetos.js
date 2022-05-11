

const persona = {
    nombre: 'Tony',
    apellido:  'Stark',
    edad: 45,
    direccion: {
        carrera: 'carreara 11'
    }
};


console.log({ persona });

const persona2 = { ...persona };

console.log(persona2);