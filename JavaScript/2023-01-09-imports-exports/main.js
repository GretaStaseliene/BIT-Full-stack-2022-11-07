// Modulyje galime atlikti palaukimus be asinchronines funkcijos
// const fb = await fetch('https://facebook.com');

// console.log(await fb.text());

// Jeigu duomenis norime paimti funkcijoje, async raktazodis yra butinas

// async function launch() {
//     const fb = await fetch('https://facebook.com');

//     console.log(await fb.text());
// }

// launch

// ./ reiskia esama direktorija
// ../ reiskia viena direktorija auksciau

import { sum, multiply, vardas, pavarde, vardasPavarde } from './functions.js';
import { vardas as name, pavarde as surname } from './helpers/variables.js';
// Kuomet priimame standartine 'default' reiksme, importuodami savo sugalvota kintamojo pavadinima nenaudojame riestinu skliaustu
import funkcijos from './functions.js';

console.log(sum(5, 10));

console.log(multiply(2, 6));

console.log(vardas, pavarde);

console.log(name, surname);

console.log(vardasPavarde());

console.log(funkcijos);