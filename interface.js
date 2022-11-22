var Utenti = /** @class */ (function () {
    function Utenti(_studente, _eta, _tecnologia, _durata) {
        this.studente = _studente;
        this.eta = _eta;
        this.tecnologia = _tecnologia;
        this.durata = _durata;
    }
    Utenti.prototype.getStudente = function () {
        return "Lo studente ".concat(this.studente, ", di anni ").concat(this.eta, ". ");
    };
    Utenti.prototype.getCorso = function () {
        return "Sta frequentando il corso di ".concat(this.tecnologia, " della durata di ").concat(this.durata, " mesi");
    };
    Utenti.prototype.completo = function () {
        return this.getStudente() + this.getCorso();
    };
    return Utenti;
}());
var nuovoUtente = new Utenti('Dario Del Giudice', 55, 'Front-end', 3);
console.log(nuovoUtente.completo());
