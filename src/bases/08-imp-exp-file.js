// import { heroes } from './data/heroes';

import heroes from "../data/heroes";

// import {heroes} from './data/heroes'


// console.log(owners);

export const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
};

// console.log(getHeroeById(2));

// const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);


// console.log(getHeroesByOwner('DC'));
// console.log(getHeroesByOwner('Marvel'));

