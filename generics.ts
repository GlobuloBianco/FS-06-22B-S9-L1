let generic: Array<number>;
//let generic: number[]; ho scritto la stessa cosa di riga 1

generic =  [2,5,7,34,12,65,8];

function fun<T>(arg: T): T {
    return arg;
}

let result = fun<string>('Hello World');
let result2 = fun<number>(3+5);

console.log(result);
console.log(result2);

function seconda<T, U, V>(arg1: T, arg2: U, arg3: V) {
    return `Questi sono i tre argomenti: ${arg1}, ${arg2}, ${arg3}`;
}

let result3 = seconda<string, number, boolean>('stringa',15,true);

console.log(result3);

let result4 = seconda<number, any, unknown[]>(200, 'ciao', [3, 6, 8]);

console.log(result4);