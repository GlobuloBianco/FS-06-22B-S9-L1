var generic;
//let generic: number[]; ho scritto la stessa cosa di riga 1
generic = [2, 5, 7, 34, 12, 65, 8];
function fun(arg) {
    return arg;
}
var result = fun('Hello World');
var result2 = fun(3 + 5);
console.log(result);
console.log(result2);
function seconda(arg1, arg2, arg3) {
    return "Questi sono i tre argomenti: ".concat(arg1, ", ").concat(arg2, ", ").concat(arg3);
}
var result3 = seconda('stringa', 15, true);
console.log(result3);
var result4 = seconda(200, 'ciao', [3, 6, 8]);
console.log(result4);
