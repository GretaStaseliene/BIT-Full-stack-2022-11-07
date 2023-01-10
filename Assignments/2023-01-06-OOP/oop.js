function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Vaisius {
    constructor() {
        this.dydis = rand(5, 25);
        this.id = rand(1000000, 9999999);
        this.prakastas = false;
    }

    prakasti() {
        this.prakastas = true;
    }
}

class Krepsys {
    static vaisiai = [];

    static pripildyti() {
        let krepsioLimitas = Krepsys.vaisiai.length;

        for (let i = krepsioLimitas; i < 20; i++) {
            this.vaisiai.push(new Vaisius);
        }

        // Krepsys.vaisiai.sort((a, b) => a - b);
        Krepsys.vaisiai.sort(function (a, b) {
            a = a.dydis;
            b = b.dydis;

            if (a > b) return -1;
            if (a < b) return 1;
            return 0;
        });

        return Krepsys.vaisiai;
    }

    static isimti() {
        const isimtasVaisius = Krepsys.vaisiai.shift();

        return isimtasVaisius;
    }
}

const vaisius = new Vaisius();
console.log(vaisius);

Krepsys.pripildyti();
console.log('Pripildytas vaisiu masyvas: ', Krepsys.vaisiai);

console.log('Isimtas vaisius ', Krepsys.isimti());
console.log('Likes vaisiu masyvas: ', Krepsys.vaisiai);

Krepsys.pripildyti();
console.log(Krepsys.vaisiai);