var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Studente = /** @class */ (function () {
    function Studente(_nome, _cognome) {
        this.nome = _nome;
        this.cognome = _cognome;
    }
    Studente.prototype.getStudente = function () {
        return "".concat(this.nome, " ").concat(this.cognome);
    };
    Studente.prototype.numbers = function () {
        return 2022;
    };
    Studente.stato = function () {
        return 'Italia';
    };
    return Studente;
}());
var Docente = /** @class */ (function (_super) {
    __extends(Docente, _super);
    function Docente(_eta, _nome, _cognome) {
        var _this = _super.call(this, _nome, _cognome) || this;
        _this.eta = _eta;
        return _this;
    }
    Docente.stato = function () {
        return 'Francia';
    };
    Docente.prototype.residenza = function () {
        return 'Il docente vive in ' + Docente.stato();
    };
    return Docente;
}(Studente));
var State = /** @class */ (function (_super) {
    __extends(State, _super);
    function State(_stato, _nazionalita, _nome, _cognome, id) {
        var _this = _super.call(this, _nome, _cognome) || this;
        _this.id = id;
        _this.stato = _stato;
        _this.nazionalita = _nazionalita;
        return _this;
    }
    State.prototype.getAnno = function () {
        return 1986;
    };
    State.prototype.setCognome = function (valore) {
        this.cognome = valore;
    };
    return State;
}(Studente));
var newState = new State('Italia', 'Tedesca', 'Giuseppe', 'Verdi', 3);
console.log(newState);
newState.setCognome('Rossi');
console.log(newState);
var newDocente = new Docente(35, 'Aldo', 'Bianchi');
console.log(newDocente.residenza());
console.log(Docente.stato());
var newStudente = new Studente('Mario', 'Rossi');
console.log(newStudente.getStudente());
var anno = newStudente.numbers();
var stato = Studente.stato();
console.log(anno);
console.log(stato);
