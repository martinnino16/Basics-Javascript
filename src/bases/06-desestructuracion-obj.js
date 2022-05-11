

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};

const { nombre, edad, clave } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const retornaPersona = ( {clave, nombre, edad, rango = 'Capitan'} ) => {

    return {
        nombreClave: clave,
        anios: edad,
        latLng: {
            lat: 14.12312,
            lng: -12.112122
        }
    }

}

const {anios, nombreClave, latLng: { lat, lng}} = retornaPersona(persona);

console.log(nombreClave, anios);
console.log(lat, lng);