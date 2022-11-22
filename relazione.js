var Phone = /** @class */ (function () {
    function Phone(_numero) {
        this.numero = _numero;
    }
    return Phone;
}());
var Utente = /** @class */ (function () {
    function Utente(_nome, _cognome, _numeri) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.numeri = _numeri;
    }
    return Utente;
}());
var newUtente = new Utente('Luca', 'Lattanzi', [3219432845, 31294328, 32943285]);
console.log(newUtente);
var Contatti = /** @class */ (function () {
    function Contatti(_tel, _email) {
        this.tel = _tel;
        this.email = _email;
    }
    return Contatti;
}());
var RigheFat = /** @class */ (function () {
    function RigheFat(_codArt, _descArt, _qty, _unitPrice) {
        this.codArt = _codArt;
        this.descArt = _descArt;
        this.qty = _qty;
        this.unitPrice = _unitPrice;
    }
    return RigheFat;
}());
var TestFat = /** @class */ (function () {
    function TestFat(_ragSoc, _indirizzo, _pIva, _contacts, _righeFat, _totPrice, idFat) {
        this.idFat = idFat;
        this.ragSoc = _ragSoc;
        this.indirizzo = _indirizzo;
        this.pIva = _pIva;
        this.contacts = _contacts;
        this.righeFat = _righeFat;
        this.totPrice = _totPrice;
    }
    return TestFat;
}());
var nuovaFattura = new TestFat('Naviganet', 'Via tal dei tali Torino', '03469221216', [{ tel: 3456789, email: 'pippo@pippo.com' }, { tel: 3456789, email: 'prova@prova.com' }], [{ codArt: '123', descrArt: 'prova', qty: 2, unitPrice: 10 }, { codArt: '456', descrArt: 'prova2', qty: 3, unitPrice: 20 }], 60, 1);
console.log(nuovaFattura);
