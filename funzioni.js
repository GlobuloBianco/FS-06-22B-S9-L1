function stringa(nome, cognome) {
    return "".concat(nome, " ").concat(cognome);
}
console.log(stringa('Dario'));
//oggetto
var STATI = {
    nome: 'Italia',
    capitale: 'Roma',
    descrizione: function () {
        return "La capitale di ".concat(this.nome, " \u00E8 ").concat(this.capitale);
    }
};
console.log(STATI.descrizione());
//gestione errori
var eccezione;
try {
    eccezione = 4 / 0;
}
catch (_a) {
    Error;
}
finally {
    console.log('Non è possibile una divisione per zero');
    eccezione = 4 / 1;
}
console.log(eccezione);
