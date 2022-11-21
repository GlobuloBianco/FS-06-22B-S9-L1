let random: number = casuale();
let giocatore1 : number = casuale();
let giocatore2 : number = casuale();
let res1: number;
let res2: number;
//da 1 a 99
function casuale(): number {
    return Math.floor((Math.random() * 99) + 1);
}
//console.log numeri
console.log(`Numero casuale generato = ${random}`);
console.log(`Numero giocatore 1: ${giocatore1}`);
console.log(`Numero giocatore 2: ${giocatore2}`);

if (giocatore2 == giocatore1) {
    console.log('Entrambi i giocatori hanno scelto lo stesso numero, riprova');
} else if (giocatore1 == random) {
    console.log('il Giocatore1 ha azzeccato il numero casuale');
} else if(giocatore2 == random) {
    console.log('il Giocatore2 ha azzeccato il numero casuale');
} else {
    calcolo();
}

function calcolo() {
    if(res1 < random) {
        res1 = random - giocatore1;
    } else {
        res1 = giocatore1 - random;
    }
    if(res1 < random) {
        res2 = random - giocatore2;
    } else {
        res2 = giocatore2 - random;
    }

    if (res1 > res2) {
        console.log('Nessuno dei due giocatori ha indovinato, ma il giocatore 2 si è avvicinato di più');
    } else {
        console.log('Nessuno dei due giocatori ha indovinato, ma il giocatore 1 si è avvicinato di più');
    }
}