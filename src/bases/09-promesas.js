import { getHeroeById } from "./bases/08-imp-exp-file";


// const promesa = new Promise((resolve, reject) => {
    
//     setTimeout(() => {

//         // Tarea
//         // Importar la funcion getGetHeroeById

//         const heroe = getHeroeById(2);
//         // resolve(heroe);

//         reject('No se pudo encontrar el héroe');
//     }, 2000);

// });

// promesa.then((heroe) => {
//     console.log('Then de la promesa', heroe)
// })
// .catch((error) => console.log(error));


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
    
        setTimeout(() => {
    
            // Tarea
            // Importar la funcion getGetHeroeById
    
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se pudo encontrar el héroe');
            }
    
        }, 2000);
    
    });
}

getHeroeByIdAsync(10).then(console.log)
                     .catch(console.warn);