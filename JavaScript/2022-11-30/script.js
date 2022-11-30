function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

console.log('veikia external javascript failas');

const x = 10;

console.log('pirmoji grazinta reiksme: ' + x);

// gausime klaida
// x = 15;
// console.log(x);

let y = 15;
y = 20;
console.log('antroji gauta reiksme:', y);

y += 2;
console.log('plius operatorius:', y);

y -= 10;
console.log('minus operatorius:', y);

y *= 3;
console.log('daugybos operatorius:', y);

y /= 2;
console.log('tdalybos operatorius:', y);

y++;
console.log('inkrementinis operatorius:', y);

y--;
console.log('dekrementinis operatorius:', y);


// Kondicine logika

// 1 pavyzdys
y = true;
if(y) {
    console.log('kintamasis egzistuoja');
}

y = false;

if(y) {
    console.log('kintamasis egzistuoja');
} else {
    console.log('kintamasis neegzistuoja');
}

// 2 pavyzdys
let z = false;

console.log(typeof z);

if(z == false) {
    console.log('Z turi neigiama reiksme');
}

// 3 pavyzdys
let w = 40;

if(w != 40) {
    console.log('kintamasis W nera lygus 40');
} else {
    console.log('kintamasis W yra lygus 40');
}

// 4 pavyzdys
let pirmasSkaicius = 11;
let antrasSkaicius = 11.2;

if(pirmasSkaicius  > antrasSkaicius) {
    console.log('pirmas skaicius yra didesnis');
} else if (pirmasSkaicius === antrasSkaicius) {
    console.log('skaiciai yra lygus');
} else {
    console.log('antras skaicius yra didesnis');
}

// 5pavyzdys

let pirmasSk = 11;
let antrasSk = 11;

if(pirmasSk >= antrasSk) {
    console.log('pirmas skaicius yra didesnis arba lygus antram skaiciui');
} else {
    console.log('antras skaicius yra didesnis uz pirma skaiciu');
}

// 6 pavyzdys Stringai 

const stringas = 'Lorem ipsum dolor sit amet';

console.log(stringas);

console.log('ketvirtoji stringo raide:', stringas[4]);

console.log('Stringo ilgis yra:', stringas.length);

let modifikuotasStringas = 'pridetas tekstas ir priekio ' + stringas + ' pridetas tekstas is galo';

console.log(modifikuotasStringas.replaceAll('tekstas', 'z'));

// 7 pavyzdys atsitiktiniai skaiciai

const randomSkacius = rand(5, 150);

console.log('atsitiktinis skaicius', randomSkacius);