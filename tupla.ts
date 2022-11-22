let tupla: [string, number, boolean, any, unknown];
tupla = ['ciao', 15, true, 'qualsiasi', 34];
console.log(tupla);

tupla.push(38);
console.log(tupla);

tupla.pop();
console.log(tupla);

tupla.shift();
console.log(tupla);

let studenti: [string, string][];
studenti = [['Gaetano', 'Quarto'],['Francesca', 'Pozzi'],['Flavio', 'Cirillo']];
console.table(studenti);

studenti.push(['Luca', 'Lattanzi']);
console.table(studenti);

studenti.shift();
console.table(studenti);